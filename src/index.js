import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from '../src/Apollo/Client';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthProvider } from './Contexts/AuthContext';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { HeaderColor } from './Static/Color/Color';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: HeaderColor
        },
    },
});  
const isLoggedIn = localStorage.getItem("isLoggedIn");

ReactDOM.render(
    <ApolloProvider client={Client}>
        <AuthProvider isLoggedIn={isLoggedIn}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </ApolloProvider>, 
document.getElementById('root'));
