import gql from 'graphql-tag';

const FeedSearchQuery = gql`
query ($term: String!) {   
    allTag(term: $term) {
        tag {
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
}
`

export default FeedSearchQuery;