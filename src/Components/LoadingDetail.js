import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';


const LoadingDetail = () => {
    return (
        <Box>
            <Header/>
            <Box py={6}>
                <Container style={{maxWidth: 670, padding: 0}}>
                    <Skeleton variant="text" animation="wave" height={50}/>
                    <Skeleton variant="text" animation="wave" height={50}/>
                    <Skeleton variant="text" animation="wave" height={50}/>
                    <Skeleton variant="text" animation="wave" height={600}/>
                </Container>
            </Box>
            <Footer/>
        </Box>
    )
}

export default LoadingDetail;