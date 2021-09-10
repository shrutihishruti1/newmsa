/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Year } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddContent
// ====================================================

export interface AddContent_addContent {
  __typename: "Content";
  id: string;
  name: string;
  description: string;
  link: string;
  year: Year;
  modified: any;
  created: any;
}

export interface AddContent {
  addContent: AddContent_addContent;
}

export interface AddContentVariables {
  name: string;
  description: string;
  link: string;
  year: string;
}
