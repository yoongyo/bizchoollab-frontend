import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FeedDetailQuery from '../Queries/FeedDetailQuery';
import LoadingDetail from '../Components/LoadingDetail';
import Tag from '../Components/Tag';
import { HeaderColor } from '../Static/Color/Color';
import { Link } from 'react-router-dom';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';

const FeedDetail = ({match}) => {
    const feedId = match.params.pk;
    const { data, erorr, loading } = useQuery(FeedDetailQuery, {
        variables: { feedId: feedId } 
    })
    if (erorr) return <h1>Error</h1>
  	if (loading) return <LoadingDetail/>
    const feed = data.feed;
    return (
        <Box>
            <Header/>
            <Box py={6} minHeight={800}>
                <Container style={{maxWidth: 670, padding: 0}}>
                    <h2 style={{marginTop: 0, margin: 0}}>{feed.title}</h2>
                    <Box>
                        <p style={{color:'gray', fontSize: 15, display: 'inline-block', marginRight: 6}}>{feed.createdAt} | </p>
                        <Tag tags={feed.tag} createdAt={feed.createdAt}/>
                    </Box>
                    <hr/>
                    <div style={{paddingTop: 20}} dangerouslySetInnerHTML={ {__html: feed.content} }/>
                    <hr/>
                    <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button style={{backgroundColor: HeaderColor}}>
                            <Link style={{fontSize: 17, textDecoration: 'none', color: 'white'}}>
                                다음
                            </Link>
                        </Button>
                        <Button style={{backgroundColor: HeaderColor}}>
                            <Link style={{fontSize: 17, textDecoration: 'none', color: 'white'}}>
                                목록
                            </Link>
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer/>
        </Box>
    )
}

export default FeedDetail;