/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Year } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Content
// ====================================================

export interface Content_content {
  __typename: "Content";
  id: string;
  name: string;
  description: string;
  link: string;
  year: Year;
  modified: any;
  created: any;
}

export interface Content {
  content: Content_content;
}

export interface ContentVariables {
  id: string;
}
