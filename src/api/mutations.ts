import {gql} from '@apollo/client';
import * as fragments from "./fragments";


export const LOGIN = gql`
mutation Login($code: String!) {
  login(input: { code: $code }) {
    viewer {
      ...viewerFields
    }
    jwt
  }
}
${fragments.VIEWER}
`;



export const ADD_CONTENT = gql`
mutation AddContent(
  $name: String!
  $description: String!
  $link: String!
  $year: String!
) {
  addContent(input: { name: $name, description: $description, link: $link, year: $year }) {
    ...contentFields
  }
}
${fragments.CONTENT}
`;

export const EDIT_CONTENT= gql`
mutation EditContent(
  $contentId: ID!
  $name: String
  $description: String
  $link: String
) {
  editContent(
    input: {
      contentId: $contentId,
      name: $name,
      description: $description,
      link: $link
    }
  ) {
    ...contentFields
  }
}
${fragments.CONTENT}
`;

export const ADD_COMMENT = gql`
mutation AddComment(
  $description: String!,
  $contentId: ID!
) {
  addComment(input: { description: $description, contentId: $contentId }) {
    ...commentFields
  }
}
${fragments.COMMENT}
`

export const EDIT_COMMENT = gql`
mutation EditComment(
  $commentId: ID!,
  $description: String
) {
  editComment(input: { commentId: $commentId, description: $description}) {
    ...commentFields
  }
}
${fragments.COMMENT}
`