import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

const SkeletonCard = () => {
    return (
        <Box px={2} pb={3}>
            <Skeleton variant="rect" animation="wave" height={240} />
            <Box style={{height: 132}}>
                <Skeleton variant="text" animation="wave" height={50}/>
                <Skeleton variant="text" animation="wave" height={82}/>
            </Box>
        </Box>
  );
}

export default SkeletonCard;
