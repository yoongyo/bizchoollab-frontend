import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';

const LoadingDetail = () => {
    return (
        <Box py={6}>
            <Container style={{maxWidth: 670}}>
                <Skeleton variant="text" animation="wave" height={50}/>
                <Skeleton variant="text" animation="wave" height={50}/>
                <Skeleton variant="text" animation="wave" height={50}/>
                <Skeleton variant="text" animation="wave" height={600}/>
            </Container>
        </Box>
    )
}

export default LoadingDetail;