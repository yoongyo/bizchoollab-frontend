import gql from 'graphql-tag';

const AllList = gql`
{
  allPeed {
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