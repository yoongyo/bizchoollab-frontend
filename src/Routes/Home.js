import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import AllQuery from '../Queries/AllQuery';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ContentCard from '../Components/ContentCard';
import { CategoryColor } from '../Static/Color/Color';
import LoadingList from '../Components/LoadingList';

const Home = () => { 
    const { data, error, loading } = useQuery(AllQuery);
    if (error) return <h1>error</h1>
    if (loading) return <LoadingList/>

    const all = data.allPeed;
    return (
        <Box style={{minHeight: 800}}>
            <Box style={{display: "flex", height: 240, backgroundColor: CategoryColor, justifyContent:'center', alignItems: 'center'}}>
                <Box border={2} borderColor="white" >
                    <h2 style={{margin:0, color: 'white', padding: 15}}>Home</h2>
                </Box>
            </Box>
            <Box py={10}>
                <Container maxWidth="lg">
                    {all.map((item, index) => (
                        <Box style={{display: "inline-block", width: '33.333333%'}}>
                            <Link href={item.category.name + '/' + item.id}>
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

export default Home;