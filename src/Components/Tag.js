import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const Tag = ({tags}) => {
    console.log(tags)
    return (
        tags.map(tag => (
            <Box px={2} style={{backgroundColor: 'grey', marginRight: 10, display:'inline-block', alignItems: 'center', justifyContent: 'center'}}>
                <Link to={`/search?term=${tag.name}`} style={{textDecoration: 'none'}}>
                    <p style={{color: 'white', margin:0, fontSize: 16}}>#{tag.name}</p>
                </Link>
            </Box>
        ))
    )

}

export default Tag;