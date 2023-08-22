const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// env
require("dotenv").config();
const port = process.env.PORT || 3000;

// routes

const authRoutes = require("./routes/authRoutes");

// ----------------------------------------

// MIDDLEWARE
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

// use routes

// app.get('/', (_, res) => res.sendFile(__dirname + '/index.html'));
app.use("/api/auth", authRoutes);

// listen port
app.listen(port, () => console.log(`Server started on port ${port}`));