import gql from 'graphql-tag';

export const LoginMutation = gql`
    mutation tokenAuth($id: String!, $password: String!){
        tokenAuth(username: $id, password: $password){
            token
        }
    }
`

export const SignupMutation = gql`
    mutation createUser($id: String!, $password: String!, $email: String!, $name: String!){
        createUser(username: $email, password: $password, email: $email){
        user{
            id
            username
            password
            email
        }
    }
  }
`