import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import AllQuery from '../Queries/AllQuery';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ContentCard from '../Components/ContentCard';
import { CategoryColor } from '../Static/Color/Color';
import LoadingList from '../Components/LoadingList';

const PeedList = ({match}) => { 
    const category = match.params.category
    const { data, error, loading } = useQuery(AllQuery);
    if (error) return <h1>Error!</h1>
    if (loading) return <LoadingList/>

    const peeds = data.allPeed.filter(peed => peed.category.name === category);
    
    return (
        <Box style={{minHeight: 800}}>
            <Box style={{display: "flex", height: 240, backgroundColor: CategoryColor, justifyContent:'center', alignItems: 'center'}}>
                <Box border={2} borderColor="white" >
                    <h2 style={{margin:0, color: 'white', padding: 15}}>{category.toUpperCase()}</h2>
                </Box>
            </Box>
            <Box py={10}>
                <Container maxWidth="lg">
                    {peeds.map((item, index) => (
                        <Box style={{display: "inline-block", width: '33.333333%'}}>
                            <Link href={category+"/"+item.id}>
                            <ContentCard 
                                title={item.title} 
                                content={item.content} 
                                thumbnail={item.thumbnail} 
                                createdAt={item.createdAt}
                            />
                            </Link>
                        </Box>
                    ))}
                </Container>
            </Box>
        </Box>
    )
} 

export default PeedList;