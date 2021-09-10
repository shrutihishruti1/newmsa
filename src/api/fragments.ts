import { gql } from "@apollo/client";

export const VIEWER = gql`
    fragment viewerFields on Viewer {
        id
        name
        gitHub
        imageURI
    }
`;

export const CONTENT = gql`
    fragment contentFields on Content {
        id
        name
        description
        link
        year
        modified
        created
    }
`;

export const COMMENT = gql`
    fragment commentFields on Comment {
        id
        description
        modified
        created
    }
`;

export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;