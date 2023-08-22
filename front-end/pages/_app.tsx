import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import Amplify, { Auth } from 'aws-amplify';
import { createAppSyncClient } from '../appsync/AppSyncClient';
import amplifyConfig from '../deployment/amplify-config';
import Layout from '../components/layout/Layout';

Amplify.configure(amplifyConfig);

function App({ Component, pageProps }: AppProps) {
    const validateUserSession = async () => {
        try {
            await Auth.currentSession();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default App;
