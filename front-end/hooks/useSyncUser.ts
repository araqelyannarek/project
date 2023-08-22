import {gql, useLazyQuery } from '@apollo/client';
import { CognitoUser } from '../graphql/API';
import { getCognitoUser } from '../graphql/queries';

export const useGetUser = () => {
  const [call, { loading, error, data }] = useLazyQuery<any>(gql(getCognitoUser), {
    fetchPolicy: 'no-cache',
    variables: {
      name: "namevalue",
      bname: "bnamevalue",
      email: "emailvalue",
      message: "messagevalue"
    },
  });

  return {
    getUser: call,
    getUserData: data?.getCognitoUser,
    getUserLoading: loading,
    getUserError: error,
  };
};

// const query = gql`{
//   countries {
//     name
//     capital
//     currency
//   }
// }`;
//
// export const usePostContactData = () => {
//   const { loading, error, data } = useQuery(gql(query));
//
//   return {
//     getUser: call,
//     getUserData: data?.getCognitoUser,
//     getUserLoading: loading,
//     getUserError: error,
//   };
// };