import gql from 'graphql-tag';

const AllList = gql`
{
  allFeed {
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

export default AllList;