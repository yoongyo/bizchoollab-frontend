import gql from 'graphql-tag';

const CategoryQuery = gql`
{
	allCategory {
        name
    }
    allChildcategory {
        name
        category {
            id
            name
        }
    }
}
`

export default CategoryQuery;