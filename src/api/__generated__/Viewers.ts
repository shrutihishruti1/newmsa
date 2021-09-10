/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Viewers
// ====================================================

export interface Viewers_viewers_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Viewers_viewers_edges {
  __typename: "ViewerEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Viewers_viewers_nodes {
  __typename: "Viewer";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Viewers_viewers {
  __typename: "ViewerConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Viewers_viewers_pageInfo;
  /**
   * A list of edges.
   */
  edges: Viewers_viewers_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Viewers_viewers_nodes[] | null;
}

export interface Viewers {
  viewers: Viewers_viewers | null;
}

export interface ViewersVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
