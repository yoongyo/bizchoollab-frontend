import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FeedDetailQuery from '../Queries/FeedDetailQuery';
import LoadingDetail from '../Components/LoadingDetail';


const FeedDetail = ({match}) => {
    const feedId = match.params.pk;
    const { data, erorr, loading } = useQuery(FeedDetailQuery, {
        variables: { feedId: feedId } 
    })
    if (erorr) return <h1>Error</h1>
  	if (loading) return <LoadingDetail/>
    const feed = data.feed;
    return (
        <Box py={6} minHeight={800}>
            <Container style={{maxWidth: 670}}>
                <h2 style={{marginTop: 0}}>{feed.title}</h2>
                <Box>
                    <p style={{color:'gray', fontSize: 15}}>{feed.createdAt} | Tag</p>
                </Box>
                <hr/>
                <div dangerouslySetInnerHTML={ {__html: feed.content} }/>
            </Container>
        </Box>
    )
}

export default FeedDetail;