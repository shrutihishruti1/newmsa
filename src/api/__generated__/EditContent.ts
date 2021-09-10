/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Year } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EditContent
// ====================================================

export interface EditContent_editContent {
  __typename: "Content";
  id: string;
  name: string;
  description: string;
  link: string;
  year: Year;
  modified: any;
  created: any;
}

export interface EditContent {
  editContent: EditContent_editContent;
}

export interface EditContentVariables {
  contentId: string;
  name?: string | null;
  description?: string | null;
  link?: string | null;
}
