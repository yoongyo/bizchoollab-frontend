import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FooterColor } from '../Static/Color/Color';

const Footer = () => { 
    return (
        <Box style={{height: 200, backgroundColor: FooterColor}}>
            <Container >
                <Box display="flex" justifyContent="center">
                </Box>
            </Container>
        </Box>
    )
} 

export default Footer;