import gql from 'graphql-tag';

const FeedMutation = gql`
mutation ($title: String!, $categoryId: Int!, $childCategoryId: Int!, $content: String!, $thumbnail: Upload, $tags: [String!]){
    createFeed(title: $title, category: $categoryId, childCategory: $childCategoryId, content: $content, thumbnail: $thumbnail, tags: $tags) {
        feed {
        id
        title
        content
        thumbnail
        category {
          id 
          name
        }
        childCategory {
          id
          name
        }
        createdAt
      }
    }  
  }
`

export default FeedMutation;