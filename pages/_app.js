import '../styles/globals.css'
import Router from 'next/router'
import { useState } from 'react'
import LoadingBox from '../components/LoadingBox';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StorePorvider } from '../Store';

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "https://rveapiql.herokuapp.com",
    cache: new InMemoryCache()
})
  
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  })

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);  
  })

  return (
    <ApolloProvider client={client}>
      <StorePorvider>
    {loading? <LoadingBox color="white" /> : 
      <Component {...pageProps} />    
    }
    </StorePorvider>
    </ApolloProvider>
  )
  
}

export default MyApp