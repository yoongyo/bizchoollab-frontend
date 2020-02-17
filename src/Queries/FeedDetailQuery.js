import gql from 'graphql-tag';

const FeedDetailQuery = gql`
query feed($feedId: Int!){
	feed(id: $feedId){
        title
        thumbnail  
        content
        createdAt
        category {
            id
            name
        }
        tag {
            name
        }
    }
}
`

export default FeedDetailQuery;