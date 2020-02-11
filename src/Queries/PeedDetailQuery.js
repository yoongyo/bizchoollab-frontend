import gql from 'graphql-tag';

const PeedDetailQuery = gql`
query peed($peedId: Int!){
	peed(id: $peedId){
        title
        thumbnail  
        content
        createdAt
        category {
            id
            name
        }
    }
}
`

export default PeedDetailQuery;