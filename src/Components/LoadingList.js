import React from 'react';
import Box from '@material-ui/core/Box';
import SkeletonCard from '../Components/SkeletonCard';
import Container from '@material-ui/core/Container';
import { CategoryColor } from '../Static/Color/Color';

const LoadingList = () => {
    return (
        <Box style={{minHeight: 800}}>
            <Box style={{display: "flex", height: 240, backgroundColor: CategoryColor, justifyContent:'center', alignItems: 'center'}}>
            </Box>
            <Box py={10}>
                <Container maxWidth="lg">
                    <Box style={{display: "inline-block", width: '33.333333%'}}>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </Box>
                    <Box style={{display: "inline-block", width: '33.333333%'}}>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </Box>
                    <Box style={{display: "inline-block", width: '33.333333%'}}>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}


export default LoadingList;