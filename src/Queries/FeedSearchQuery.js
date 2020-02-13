import gql from 'graphql-tag';

const FeedSearchQuery = gql`
query ($term: String!){   
    allFeed(term: $term) {
        id
        title
        category {
            id
            name
        }
        thumbnail
        content
        createdAt
    }
    
}
`

export default FeedSearchQuery;