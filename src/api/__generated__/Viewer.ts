/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Viewer
// ====================================================

export interface Viewer_viewer {
  __typename: "Viewer";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Viewer {
  viewer: Viewer_viewer;
}

export interface ViewerVariables {
  id: string;
}
