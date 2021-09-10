import {gql} from '@apollo/client';
import * as fragments from "./fragments";

export const CONTENTS = gql`
query Contents($first: Int, $after: String, $last: Int, $before: String) {
    contents(first: $first, after: $after, last: $last, before: $before) {
        pageInfo{
            ...pageInfoFields
        }
        edges{
            cursor
        } 
        nodes { 
            ...contentFields
            viewer{
                ...viewerFields
            }
        }
    }
}
${fragments.CONTENT}
${fragments.PAGE_INFO}
${fragments.VIEWER}
`

export const CONTENT  = gql`
query Content($id: ID!) {
    content(id: $id) {
        ...contentFields
    }
}
${fragments.CONTENT}
`

export const VIEWERS = gql`
query Viewers($first: Int, $after: String, $last: Int, $before: String) {
    viewers(first: $first, after: $after, last: $last, before: $before) {
        pageInfo{
        ...pageInfoFields
        }
        edges{
            cursor
        } 
        nodes { 
            ...viewerFields
        }
    }
}
${fragments.VIEWER}
${fragments.PAGE_INFO}
`

export const VIEWER = gql`
query Viewer($id: ID!) {
    viewer(id: $id){
        ...viewerFields
    }
}
${fragments.VIEWER}
`

export const SELF = gql`
query Self {
    self {
        ...viewerFields
    }
}
${fragments.VIEWER}
`