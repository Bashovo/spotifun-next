import '../styles/globals.css'
import {Provider} from 'react-redux'
import {ApolloProvider, useQuery} from '@apollo/client';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {useRouter} from "next/router";
import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./reducers/index"
const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/',
    cache: new InMemoryCache()
});

const store = createStore(rootReducer);
function MyApp(props) {
    const {classes, Component, pageProps} = props;
    const router = useRouter();
    const {user} = router.query;
    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </Provider>
    )
}

export default MyApp
