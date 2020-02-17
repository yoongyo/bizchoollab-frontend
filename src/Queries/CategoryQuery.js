import gql from 'graphql-tag';

const CategoryQuery = gql`
{
	allCategory {
        id
        name
    }
    allChildcategory {
        id
        name
        category {
            id
            name
        }
    }
}
`

export default CategoryQuery;