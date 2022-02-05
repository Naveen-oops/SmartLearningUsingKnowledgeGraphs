import Layouts from '../components/Layouts';
import '../styles/globals.css'

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client';

const createApolloClient = () => {
  const link = new HttpLink({
    uri: '/api/graphql'
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
};

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <ApolloProvider client={createApolloClient()}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layouts>
  );
}

export default MyApp;
