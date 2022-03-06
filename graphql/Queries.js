import gql from "graphql-tag";

export const LOAD_POST = gql`
    query post($slug: String!){
        getPost(slug: $slug){
            id
            title
            sanitizedHtml
            category
            slug
            createdAt
            image
            userphoto
            username
        }
    }
`

export const LOAD_COMPUTER = gql`
    query Query($slug: String!){
        getComputer(slug: $slug){
            id
            name
            description
            createdAt
            slug
            image
            price
            available
            specs{
                name
                price
            }
        }
    }
`