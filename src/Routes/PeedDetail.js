import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import PeedDetailQuery from '../Queries/PeedDetailQuery';
import LoadingDetail from '../Components/LoadingDetail';


const PeedDetail = ({match}) => {
    const peedId = match.params.pk;
    const { data, erorr, loading } = useQuery(PeedDetailQuery, {
        variables: { peedId: peedId } 
    })
    if (erorr) return <h1>Error</h1>
  	if (loading) return <LoadingDetail/>
    const peed = data.peed;
    return (
        <Box py={6} minHeight={800}>
            <Container style={{maxWidth: 670}}>
                <h2 style={{marginTop: 0}}>{peed.title}</h2>
                <Box>
                    <p style={{color:'gray', fontSize: 15}}>{peed.createdAt} | Tag</p>
                </Box>
                <hr/>
                <div dangerouslySetInnerHTML={ {__html: peed.content} }/>
            </Container>
        </Box>
    )
}

export default PeedDetail;