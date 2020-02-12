import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { useQuery } from '@apollo/react-hooks';
import FeedSearchQuery from '../Queries/FeedSearchQuery';
import LoadingList from '../Components/LoadingList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ContentCard from '../Components/ContentCard';
import { CategoryColor } from '../Static/Color/Color';


const FeedSearch = withRouter((location) => {
    const term = queryString.parse(location.search).term;
    const { data, erorr, loading } = useQuery(FeedSearchQuery, {
        variables: { term: term } 
    });

    if (erorr) return <h1>Error</h1>
  	if (loading) return <LoadingList/>
    
    const feeds = data.allFeed;
    
    return (
        <Box style={{minHeight: 800}}>
            <Box style={{display: "flex", height: 240, backgroundColor: CategoryColor, justifyContent:'center', alignItems: 'center'}}>
                <Box border={2} borderColor="white">
                    <h2 style={{margin:0, color: 'white', padding: 15}}>SEARCH</h2>
                </Box>
            </Box>
            <Box py={10}>
                <Container maxWidth="lg">
                    {feeds.map((item, index) => (
                        <Box style={{display: "inline-block", width: '33.333333%'}}>
                            <Link href={item.category.name+"/"+item.id}>
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
})

export default FeedSearch;
