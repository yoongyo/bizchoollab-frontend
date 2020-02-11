import gql from 'graphql-tag';

const PeedMutation = gql`
mutation ($title: String!, $categoryId: Int!, $childCategoryId: Int!, $content: String!, $thumbnail: Upload, $tags: [String!]){
    createPeed(title: $title, category: $categoryId, childCategory: $childCategoryId, content: $contenet, thumbnail: $thumbnail, tags: $tag) {
        peed {
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

export default PeedMutation;