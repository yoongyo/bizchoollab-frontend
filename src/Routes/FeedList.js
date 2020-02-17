import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import AllQuery from '../Queries/AllQuery';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import ContentCard from '../Components/ContentCard';
import { CategoryColor } from '../Static/Color/Color';
import LoadingList from '../Components/LoadingList';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';

const FeedList = ({match}) => { 
    const category = match.params.category
    const { data, error, loading } = useQuery(AllQuery);
    if (error) return <h1>Error!</h1>
    if (loading) return <LoadingList/>

    const feeds = data.allFeed.filter(feed => feed.category.name === category);
    
    return (
        <Box>
            <Header/>
            <Box style={{minHeight: 800}}>
                <Box style={{display: "flex", height: 240, backgroundColor: CategoryColor, justifyContent:'center', alignItems: 'center'}}>
                    <Box border={2} borderColor="white" >
                        <h2 style={{margin:0, color: 'white', padding: 15}}>{category.toUpperCase()}</h2>
                    </Box>
                </Box>
                <Box py={10}>
                    <Container maxWidth="lg">
                        {feeds.map((item, index) => (
                            <Box style={{display: "inline-block", width: '33.333333%'}}>
                                <Link to={category+"/"+item.id} style={{textDecoration: 'none'}}>
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
            <Footer/>
        </Box>
        
    )
} 

export default FeedList;