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

ReactDOM.render(
    <ApolloProvider client={Client}>
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </ApolloProvider>, 
document.getElementById('root'));
