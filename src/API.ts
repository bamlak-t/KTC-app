/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNoticeInput = {
  id?: string | null,
  year_group: number,
  notices: Array< TableCellDataInput | null >,
};

export type TableCellDataInput = {
  cellID: string,
  name: string,
  time: string,
  data: string,
};

export type ModelNoticeConditionInput = {
  year_group?: ModelIntInput | null,
  and?: Array< ModelNoticeConditionInput | null > | null,
  or?: Array< ModelNoticeConditionInput | null > | null,
  not?: ModelNoticeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type Notice = {
  __typename: "Notice",
  id: string,
  year_group: number,
  notices:  Array<TableCellData | null >,
  createdAt: string,
  updatedAt: string,
};

export type TableCellData = {
  __typename: "TableCellData",
  cellID: string,
  name: string,
  time: string,
  data: string,
};

export type UpdateNoticeInput = {
  id: string,
  year_group?: number | null,
  notices?: Array< TableCellDataInput | null > | null,
};

export type DeleteNoticeInput = {
  id: string,
};

export type CreateTimetableInput = {
  id?: string | null,
  year_group: number,
  tables: Array< TableCellDataInput | null >,
};

export type ModelTimetableConditionInput = {
  year_group?: ModelIntInput | null,
  and?: Array< ModelTimetableConditionInput | null > | null,
  or?: Array< ModelTimetableConditionInput | null > | null,
  not?: ModelTimetableConditionInput | null,
};

export type Timetable = {
  __typename: "Timetable",
  id: string,
  year_group: number,
  tables:  Array<TableCellData | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTimetableInput = {
  id: string,
  year_group?: number | null,
  tables?: Array< TableCellDataInput | null > | null,
};

export type DeleteTimetableInput = {
  id: string,
};

export type CreateHomeworkInput = {
  id?: string | null,
  year_group: number,
  homework: Array< TableCellDataInput | null >,
};

export type ModelHomeworkConditionInput = {
  year_group?: ModelIntInput | null,
  and?: Array< ModelHomeworkConditionInput | null > | null,
  or?: Array< ModelHomeworkConditionInput | null > | null,
  not?: ModelHomeworkConditionInput | null,
};

export type Homework = {
  __typename: "Homework",
  id: string,
  year_group: number,
  homework:  Array<TableCellData | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHomeworkInput = {
  id: string,
  year_group?: number | null,
  homework?: Array< TableCellDataInput | null > | null,
};

export type DeleteHomeworkInput = {
  id: string,
};

export type ModelNoticeFilterInput = {
  id?: ModelIDInput | null,
  year_group?: ModelIntInput | null,
  and?: Array< ModelNoticeFilterInput | null > | null,
  or?: Array< ModelNoticeFilterInput | null > | null,
  not?: ModelNoticeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelNoticeConnection = {
  __typename: "ModelNoticeConnection",
  items?:  Array<Notice | null > | null,
  nextToken?: string | null,
};

export type ModelTimetableFilterInput = {
  id?: ModelIDInput | null,
  year_group?: ModelIntInput | null,
  and?: Array< ModelTimetableFilterInput | null > | null,
  or?: Array< ModelTimetableFilterInput | null > | null,
  not?: ModelTimetableFilterInput | null,
};

export type ModelTimetableConnection = {
  __typename: "ModelTimetableConnection",
  items?:  Array<Timetable | null > | null,
  nextToken?: string | null,
};

export type ModelHomeworkFilterInput = {
  id?: ModelIDInput | null,
  year_group?: ModelIntInput | null,
  and?: Array< ModelHomeworkFilterInput | null > | null,
  or?: Array< ModelHomeworkFilterInput | null > | null,
  not?: ModelHomeworkFilterInput | null,
};

export type ModelHomeworkConnection = {
  __typename: "ModelHomeworkConnection",
  items?:  Array<Homework | null > | null,
  nextToken?: string | null,
};

export type CreateNoticeMutationVariables = {
  input: CreateNoticeInput,
  condition?: ModelNoticeConditionInput | null,
};

export type CreateNoticeMutation = {
  createNotice?:  {
    __typename: "Notice",
    id: string,
    year_group: number,
    notices:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoticeMutationVariables = {
  input: UpdateNoticeInput,
  condition?: ModelNoticeConditionInput | null,
};

export type UpdateNoticeMutation = {
  updateNotice?:  {
    __typename: "Notice",
    id: string,
    year_group: number,
    notices:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoticeMutationVariables = {
  input: DeleteNoticeInput,
  condition?: ModelNoticeConditionInput | null,
};

export type DeleteNoticeMutation = {
  deleteNotice?:  {
    __typename: "Notice",
    id: string,
    year_group: number,
    notices:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTimetableMutationVariables = {
  input: CreateTimetableInput,
  condition?: ModelTimetableConditionInput | null,
};

export type CreateTimetableMutation = {
  createTimetable?:  {
    __typename: "Timetable",
    id: string,
    year_group: number,
    tables:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTimetableMutationVariables = {
  input: UpdateTimetableInput,
  condition?: ModelTimetableConditionInput | null,
};

export type UpdateTimetableMutation = {
  updateTimetable?:  {
    __typename: "Timetable",
    id: string,
    year_group: number,
    tables:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTimetableMutationVariables = {
  input: DeleteTimetableInput,
  condition?: ModelTimetableConditionInput | null,
};

export type DeleteTimetableMutation = {
  deleteTimetable?:  {
    __typename: "Timetable",
    id: string,
    year_group: number,
    tables:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHomeworkMutationVariables = {
  input: CreateHomeworkInput,
  condition?: ModelHomeworkConditionInput | null,
};

export type CreateHomeworkMutation = {
  createHomework?:  {
    __typename: "Homework",
    id: string,
    year_group: number,
    homework:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHomeworkMutationVariables = {
  input: UpdateHomeworkInput,
  condition?: ModelHomeworkConditionInput | null,
};

export type UpdateHomeworkMutation = {
  updateHomework?:  {
    __typename: "Homework",
    id: string,
    year_group: number,
    homework:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHomeworkMutationVariables = {
  input: DeleteHomeworkInput,
  condition?: ModelHomeworkConditionInput | null,
};

export type DeleteHomeworkMutation = {
  deleteHomework?:  {
    __typename: "Homework",
    id: string,
    year_group: number,
    homework:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNoticeQueryVariables = {
  id: string,
};

export type GetNoticeQuery = {
  getNotice?:  {
    __typename: "Notice",
    id: string,
    year_group: number,
    notices:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNoticesQueryVariables = {
  filter?: ModelNoticeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNoticesQuery = {
  listNotices?:  {
    __typename: "ModelNoticeConnection",
    items?:  Array< {
      __typename: "Notice",
      id: string,
      year_group: number,
      notices:  Array< {
        __typename: "TableCellData",
        cellID: string,
        name: string,
        time: string,
        data: string,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTimetableQueryVariables = {
  id: string,
};

export type GetTimetableQuery = {
  getTimetable?:  {
    __typename: "Timetable",
    id: string,
    year_group: number,
    tables:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTimetablesQueryVariables = {
  filter?: ModelTimetableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimetablesQuery = {
  listTimetables?:  {
    __typename: "ModelTimetableConnection",
    items?:  Array< {
      __typename: "Timetable",
      id: string,
      year_group: number,
      tables:  Array< {
        __typename: "TableCellData",
        cellID: string,
        name: string,
        time: string,
        data: string,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHomeworkQueryVariables = {
  id: string,
};

export type GetHomeworkQuery = {
  getHomework?:  {
    __typename: "Homework",
    id: string,
    year_group: number,
    homework:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHomeworkQueryVariables = {
  filter?: ModelHomeworkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHomeworkQuery = {
  listHomework?:  {
    __typename: "ModelHomeworkConnection",
    items?:  Array< {
      __typename: "Homework",
      id: string,
      year_group: number,
      homework:  Array< {
        __typename: "TableCellData",
        cellID: string,
        name: string,
        time: string,
        data: string,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNoticeSubscription = {
  onCreateNotice?:  {
    __typename: "Notice",
    id: string,
    year_group: number,
    notices:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoticeSubscription = {
  onUpdateNotice?:  {
    __typename: "Notice",
    id: string,
    year_group: number,
    notices:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoticeSubscription = {
  onDeleteNotice?:  {
    __typename: "Notice",
    id: string,
    year_group: number,
    notices:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTimetableSubscription = {
  onCreateTimetable?:  {
    __typename: "Timetable",
    id: string,
    year_group: number,
    tables:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTimetableSubscription = {
  onUpdateTimetable?:  {
    __typename: "Timetable",
    id: string,
    year_group: number,
    tables:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTimetableSubscription = {
  onDeleteTimetable?:  {
    __typename: "Timetable",
    id: string,
    year_group: number,
    tables:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHomeworkSubscription = {
  onCreateHomework?:  {
    __typename: "Homework",
    id: string,
    year_group: number,
    homework:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHomeworkSubscription = {
  onUpdateHomework?:  {
    __typename: "Homework",
    id: string,
    year_group: number,
    homework:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHomeworkSubscription = {
  onDeleteHomework?:  {
    __typename: "Homework",
    id: string,
    year_group: number,
    homework:  Array< {
      __typename: "TableCellData",
      cellID: string,
      name: string,
      time: string,
      data: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
