/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://deletesections.d3nfmasq1fmivd.amplifyapp.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'ap-southeast-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '7ol9ebq8p4h7bbiio9ikj8vrv2',
  USER_POOL_ID: 'ap-southeast-1_FanDr2tGU',
  IDENTITY_POOL_ID: 'ap-southeast-1:1e576ccc-c940-4fce-a310-1c11c1ed467a',
  GRAPHQL_ENDPOINT: 'https://s5gnodzinfhn3nn3yadfxoufky.appsync-api.ap-southeast-1.amazonaws.com/graphql',
  GRAPHQL_ENDPOINT1: 'https://hev36nxj4rhenfgkm5dzebwmxe.appsync-api.ap-southeast-1.amazonaws.com/graphql',
};

export default configDevelopment;
