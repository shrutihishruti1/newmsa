/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Year } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Contents
// ====================================================

export interface Contents_contents_pageInfo {
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

export interface Contents_contents_edges {
  __typename: "ContentEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Contents_contents_nodes_viewer {
  __typename: "Viewer";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Contents_contents_nodes {
  __typename: "Content";
  id: string;
  name: string;
  description: string;
  link: string;
  year: Year;
  modified: any;
  created: any;
  viewer: Contents_contents_nodes_viewer;
}

export interface Contents_contents {
  __typename: "ContentConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Contents_contents_pageInfo;
  /**
   * A list of edges.
   */
  edges: Contents_contents_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Contents_contents_nodes[] | null;
}

export interface Contents {
  contents: Contents_contents | null;
}

export interface ContentsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
