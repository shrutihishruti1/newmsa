/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddComment
// ====================================================

export interface AddComment_addComment {
  __typename: "Comment";
  id: string;
  description: string;
  modified: any;
  created: any;
}

export interface AddComment {
  addComment: AddComment_addComment;
}

export interface AddCommentVariables {
  description: string;
  contentId: string;
}
