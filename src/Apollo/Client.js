import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';


const apolloClientOptions = {
    uri: 'http://bizchoollab.pythonanywhere.com/graphql/',
};

const client = new ApolloClient({
    ...apolloClientOptions,
    cache: new InMemoryCache(),
})


export default client;