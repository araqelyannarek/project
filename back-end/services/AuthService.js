const bcrypt = require('bcrypt');
const BaseService = require('./BaseService');
const { createToken } = require('../common/token');
const { User: userModel } = require("../models/index");
const axios = require('axios');

module.exports = class AuthService extends BaseService {

  constructor() {
    super();
  }

  async signUp(req, res) {
    try {
      const { name, email, password } = req.body;
      const recaptchaResponse = req.body['g-recaptcha-response'];

      const err = this.handleErrors(req);
      if(err.hasErrors) {
        return err.body;
      }


      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        null,
        {
          params: {
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: recaptchaResponse,
          },
        } 
      );
 
      const data = response.data;

      if (!data.success) {
        return this.response({
            status: false,
            statusCode: 403,
            message: 'reCAPTCHA validation failed'
          });
      }

      const user = await userModel.findOne({
        where: {email}
      })

      if(user) {
        return this.response({
          status: false,
          statusCode: 409,
          message: 'User already registered'
        });
      }

    const hashedPassword = await bcrypt.hash(password, 10);

      const createUser = await userModel.create({
        name,
        email,
        password: hashedPassword
      });

      if(createUser) {

        return this.response({
          data: {
            id: createUser.id,
            name: createUser.name,
            email: createUser.email
          },
          statusCode: 201,
          message: 'User Registered succesfully'
        });
      }
    } catch(error) {
        console.log(error);
      return this.serverErrorResponse(error);
    }
  }

  async signIn(req) {
    try {
      const err = this.handleErrors(req);
      if(err.hasErrors) {
        return err.body;
      }

      const { email, password } = req.body;

      const user = await userModel.findOne({
        where: {email}
      });

      if(user && bcrypt.compareSync(password, user.password)) {

          const token = createToken({
            payload: {
              id: user._id
            },
            options: {
              expiresIn: "1h",
            }
          });

          return this.response({
            data: {
              token,
              user: {
                name: user.name,
                email: user.email
              }
            }
          });
      }

      return this.response({
        statusCode: 400,
        status: false,
        message: 'Incorrect email and/or password'
      });

    } catch(error) {
        console.log(error);
      return this.serverErrorResponse(error);
    }
  }

 
};