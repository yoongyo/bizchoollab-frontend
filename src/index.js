import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from '../src/Apollo/Client';
import { ApolloProvider } from '@apollo/react-hooks';

ReactDOM.render(
    <ApolloProvider client={Client}>
        <App />
    </ApolloProvider>, 
document.getElementById('root'));
