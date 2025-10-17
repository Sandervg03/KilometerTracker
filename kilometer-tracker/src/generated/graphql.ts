import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type InsertGroupUserInput = {
  email: Scalars['String']['input'];
  group: Scalars['String']['input'];
};

export type InsertGroupUserOutput = {
  __typename?: 'InsertGroupUserOutput';
  email?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "kilometer_tracker.group" */
export type Kilometer_Tracker_Group = {
  __typename?: 'kilometer_tracker_group';
  /** An array relationship */
  group_users: Array<Kilometer_Tracker_Group_User>;
  /** An aggregate relationship */
  group_users_aggregate: Kilometer_Tracker_Group_User_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "kilometer_tracker.group" */
export type Kilometer_Tracker_GroupGroup_UsersArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};


/** columns and relationships of "kilometer_tracker.group" */
export type Kilometer_Tracker_GroupGroup_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};

/** aggregated selection of "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_Aggregate = {
  __typename?: 'kilometer_tracker_group_aggregate';
  aggregate?: Maybe<Kilometer_Tracker_Group_Aggregate_Fields>;
  nodes: Array<Kilometer_Tracker_Group>;
};

/** aggregate fields of "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_Aggregate_Fields = {
  __typename?: 'kilometer_tracker_group_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Kilometer_Tracker_Group_Max_Fields>;
  min?: Maybe<Kilometer_Tracker_Group_Min_Fields>;
};


/** aggregate fields of "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kilometer_Tracker_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "kilometer_tracker.group". All fields are combined with a logical 'AND'. */
export type Kilometer_Tracker_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Kilometer_Tracker_Group_Bool_Exp>>;
  _not?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Kilometer_Tracker_Group_Bool_Exp>>;
  group_users?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
  group_users_aggregate?: InputMaybe<Kilometer_Tracker_Group_User_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kilometer_tracker.group" */
export enum Kilometer_Tracker_Group_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupPkey = 'group_pkey'
}

/** input type for inserting data into table "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_Insert_Input = {
  group_users?: InputMaybe<Kilometer_Tracker_Group_User_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Kilometer_Tracker_Group_Max_Fields = {
  __typename?: 'kilometer_tracker_group_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Kilometer_Tracker_Group_Min_Fields = {
  __typename?: 'kilometer_tracker_group_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_Mutation_Response = {
  __typename?: 'kilometer_tracker_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Kilometer_Tracker_Group>;
};

/** input type for inserting object relation for remote table "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_Obj_Rel_Insert_Input = {
  data: Kilometer_Tracker_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_On_Conflict>;
};

/** on_conflict condition type for table "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_On_Conflict = {
  constraint: Kilometer_Tracker_Group_Constraint;
  update_columns?: Array<Kilometer_Tracker_Group_Update_Column>;
  where?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "kilometer_tracker.group". */
export type Kilometer_Tracker_Group_Order_By = {
  group_users_aggregate?: InputMaybe<Kilometer_Tracker_Group_User_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kilometer_tracker.group */
export type Kilometer_Tracker_Group_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role = {
  __typename?: 'kilometer_tracker_group_role';
  role: Scalars['String']['output'];
};

/** aggregated selection of "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role_Aggregate = {
  __typename?: 'kilometer_tracker_group_role_aggregate';
  aggregate?: Maybe<Kilometer_Tracker_Group_Role_Aggregate_Fields>;
  nodes: Array<Kilometer_Tracker_Group_Role>;
};

/** aggregate fields of "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role_Aggregate_Fields = {
  __typename?: 'kilometer_tracker_group_role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Kilometer_Tracker_Group_Role_Max_Fields>;
  min?: Maybe<Kilometer_Tracker_Group_Role_Min_Fields>;
};


/** aggregate fields of "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "kilometer_tracker.group_role". All fields are combined with a logical 'AND'. */
export type Kilometer_Tracker_Group_Role_Bool_Exp = {
  _and?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Bool_Exp>>;
  _not?: InputMaybe<Kilometer_Tracker_Group_Role_Bool_Exp>;
  _or?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kilometer_tracker.group_role" */
export enum Kilometer_Tracker_Group_Role_Constraint {
  /** unique or primary key constraint on columns "role" */
  GroupRolePkey = 'group_role_pkey'
}

/** input type for inserting data into table "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Kilometer_Tracker_Group_Role_Max_Fields = {
  __typename?: 'kilometer_tracker_group_role_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Kilometer_Tracker_Group_Role_Min_Fields = {
  __typename?: 'kilometer_tracker_group_role_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role_Mutation_Response = {
  __typename?: 'kilometer_tracker_group_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Kilometer_Tracker_Group_Role>;
};

/** on_conflict condition type for table "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role_On_Conflict = {
  constraint: Kilometer_Tracker_Group_Role_Constraint;
  update_columns?: Array<Kilometer_Tracker_Group_Role_Update_Column>;
  where?: InputMaybe<Kilometer_Tracker_Group_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "kilometer_tracker.group_role". */
export type Kilometer_Tracker_Group_Role_Order_By = {
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kilometer_tracker.group_role */
export type Kilometer_Tracker_Group_Role_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "kilometer_tracker.group_role" */
export enum Kilometer_Tracker_Group_Role_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "kilometer_tracker.group_role" */
export type Kilometer_Tracker_Group_Role_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "kilometer_tracker_group_role" */
export type Kilometer_Tracker_Group_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kilometer_Tracker_Group_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kilometer_Tracker_Group_Role_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "kilometer_tracker.group_role" */
export enum Kilometer_Tracker_Group_Role_Update_Column {
  /** column name */
  Role = 'role'
}

export type Kilometer_Tracker_Group_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kilometer_Tracker_Group_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Kilometer_Tracker_Group_Role_Bool_Exp;
};

/** select columns of table "kilometer_tracker.group" */
export enum Kilometer_Tracker_Group_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "kilometer_tracker.group" */
export type Kilometer_Tracker_Group_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "kilometer_tracker_group" */
export type Kilometer_Tracker_Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kilometer_Tracker_Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kilometer_Tracker_Group_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "kilometer_tracker.group" */
export enum Kilometer_Tracker_Group_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Kilometer_Tracker_Group_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kilometer_Tracker_Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Kilometer_Tracker_Group_Bool_Exp;
};

/** columns and relationships of "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User = {
  __typename?: 'kilometer_tracker_group_user';
  email: Scalars['String']['output'];
  group: Scalars['uuid']['output'];
  /** An object relationship */
  group_rel: Kilometer_Tracker_Group;
  role: Scalars['String']['output'];
};

/** aggregated selection of "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Aggregate = {
  __typename?: 'kilometer_tracker_group_user_aggregate';
  aggregate?: Maybe<Kilometer_Tracker_Group_User_Aggregate_Fields>;
  nodes: Array<Kilometer_Tracker_Group_User>;
};

export type Kilometer_Tracker_Group_User_Aggregate_Bool_Exp = {
  count?: InputMaybe<Kilometer_Tracker_Group_User_Aggregate_Bool_Exp_Count>;
};

export type Kilometer_Tracker_Group_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Aggregate_Fields = {
  __typename?: 'kilometer_tracker_group_user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Kilometer_Tracker_Group_User_Max_Fields>;
  min?: Maybe<Kilometer_Tracker_Group_User_Min_Fields>;
};


/** aggregate fields of "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kilometer_Tracker_Group_User_Max_Order_By>;
  min?: InputMaybe<Kilometer_Tracker_Group_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Arr_Rel_Insert_Input = {
  data: Array<Kilometer_Tracker_Group_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "kilometer_tracker.group_user". All fields are combined with a logical 'AND'. */
export type Kilometer_Tracker_Group_User_Bool_Exp = {
  _and?: InputMaybe<Array<Kilometer_Tracker_Group_User_Bool_Exp>>;
  _not?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
  _or?: InputMaybe<Array<Kilometer_Tracker_Group_User_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  group?: InputMaybe<Uuid_Comparison_Exp>;
  group_rel?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kilometer_tracker.group_user" */
export enum Kilometer_Tracker_Group_User_Constraint {
  /** unique or primary key constraint on columns "email" */
  GroupUserEmailKey = 'group_user_email_key',
  /** unique or primary key constraint on columns "email", "group" */
  GroupUserPkey = 'group_user_pkey'
}

/** input type for inserting data into table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
  group_rel?: InputMaybe<Kilometer_Tracker_Group_Obj_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Kilometer_Tracker_Group_User_Max_Fields = {
  __typename?: 'kilometer_tracker_group_user_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kilometer_Tracker_Group_User_Min_Fields = {
  __typename?: 'kilometer_tracker_group_user_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Mutation_Response = {
  __typename?: 'kilometer_tracker_group_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Kilometer_Tracker_Group_User>;
};

/** on_conflict condition type for table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_On_Conflict = {
  constraint: Kilometer_Tracker_Group_User_Constraint;
  update_columns?: Array<Kilometer_Tracker_Group_User_Update_Column>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};

/** Ordering options when selecting data from "kilometer_tracker.group_user". */
export type Kilometer_Tracker_Group_User_Order_By = {
  email?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  group_rel?: InputMaybe<Kilometer_Tracker_Group_Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kilometer_tracker.group_user */
export type Kilometer_Tracker_Group_User_Pk_Columns_Input = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};

/** select columns of table "kilometer_tracker.group_user" */
export enum Kilometer_Tracker_Group_User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Group = 'group',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "kilometer_tracker.group_user" */
export type Kilometer_Tracker_Group_User_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "kilometer_tracker_group_user" */
export type Kilometer_Tracker_Group_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kilometer_Tracker_Group_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kilometer_Tracker_Group_User_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "kilometer_tracker.group_user" */
export enum Kilometer_Tracker_Group_User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Group = 'group',
  /** column name */
  Role = 'role'
}

export type Kilometer_Tracker_Group_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kilometer_Tracker_Group_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Kilometer_Tracker_Group_User_Bool_Exp;
};

/** columns and relationships of "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip = {
  __typename?: 'kilometer_tracker_trip';
  end: Scalars['Int']['output'];
  group: Scalars['uuid']['output'];
  refilled_tank: Scalars['Boolean']['output'];
  registered_by: Scalars['String']['output'];
  start: Scalars['Int']['output'];
  user: Scalars['String']['output'];
};

/** aggregated selection of "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_Aggregate = {
  __typename?: 'kilometer_tracker_trip_aggregate';
  aggregate?: Maybe<Kilometer_Tracker_Trip_Aggregate_Fields>;
  nodes: Array<Kilometer_Tracker_Trip>;
};

/** aggregate fields of "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_Aggregate_Fields = {
  __typename?: 'kilometer_tracker_trip_aggregate_fields';
  avg?: Maybe<Kilometer_Tracker_Trip_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kilometer_Tracker_Trip_Max_Fields>;
  min?: Maybe<Kilometer_Tracker_Trip_Min_Fields>;
  stddev?: Maybe<Kilometer_Tracker_Trip_Stddev_Fields>;
  stddev_pop?: Maybe<Kilometer_Tracker_Trip_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kilometer_Tracker_Trip_Stddev_Samp_Fields>;
  sum?: Maybe<Kilometer_Tracker_Trip_Sum_Fields>;
  var_pop?: Maybe<Kilometer_Tracker_Trip_Var_Pop_Fields>;
  var_samp?: Maybe<Kilometer_Tracker_Trip_Var_Samp_Fields>;
  variance?: Maybe<Kilometer_Tracker_Trip_Variance_Fields>;
};


/** aggregate fields of "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kilometer_Tracker_Trip_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Kilometer_Tracker_Trip_Avg_Fields = {
  __typename?: 'kilometer_tracker_trip_avg_fields';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "kilometer_tracker.trip". All fields are combined with a logical 'AND'. */
export type Kilometer_Tracker_Trip_Bool_Exp = {
  _and?: InputMaybe<Array<Kilometer_Tracker_Trip_Bool_Exp>>;
  _not?: InputMaybe<Kilometer_Tracker_Trip_Bool_Exp>;
  _or?: InputMaybe<Array<Kilometer_Tracker_Trip_Bool_Exp>>;
  end?: InputMaybe<Int_Comparison_Exp>;
  group?: InputMaybe<Uuid_Comparison_Exp>;
  refilled_tank?: InputMaybe<Boolean_Comparison_Exp>;
  registered_by?: InputMaybe<String_Comparison_Exp>;
  start?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kilometer_tracker.trip" */
export enum Kilometer_Tracker_Trip_Constraint {
  /** unique or primary key constraint on columns "group", "start" */
  TripPkey = 'trip_pkey'
}

/** input type for incrementing numeric columns in table "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_Inc_Input = {
  end?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_Insert_Input = {
  end?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
  refilled_tank?: InputMaybe<Scalars['Boolean']['input']>;
  registered_by?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Kilometer_Tracker_Trip_Max_Fields = {
  __typename?: 'kilometer_tracker_trip_max_fields';
  end?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
  registered_by?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Kilometer_Tracker_Trip_Min_Fields = {
  __typename?: 'kilometer_tracker_trip_min_fields';
  end?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
  registered_by?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_Mutation_Response = {
  __typename?: 'kilometer_tracker_trip_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Kilometer_Tracker_Trip>;
};

/** on_conflict condition type for table "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_On_Conflict = {
  constraint: Kilometer_Tracker_Trip_Constraint;
  update_columns?: Array<Kilometer_Tracker_Trip_Update_Column>;
  where?: InputMaybe<Kilometer_Tracker_Trip_Bool_Exp>;
};

/** Ordering options when selecting data from "kilometer_tracker.trip". */
export type Kilometer_Tracker_Trip_Order_By = {
  end?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  refilled_tank?: InputMaybe<Order_By>;
  registered_by?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kilometer_tracker.trip */
export type Kilometer_Tracker_Trip_Pk_Columns_Input = {
  group: Scalars['uuid']['input'];
  start: Scalars['Int']['input'];
};

/** select columns of table "kilometer_tracker.trip" */
export enum Kilometer_Tracker_Trip_Select_Column {
  /** column name */
  End = 'end',
  /** column name */
  Group = 'group',
  /** column name */
  RefilledTank = 'refilled_tank',
  /** column name */
  RegisteredBy = 'registered_by',
  /** column name */
  Start = 'start',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "kilometer_tracker.trip" */
export type Kilometer_Tracker_Trip_Set_Input = {
  end?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
  refilled_tank?: InputMaybe<Scalars['Boolean']['input']>;
  registered_by?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Kilometer_Tracker_Trip_Stddev_Fields = {
  __typename?: 'kilometer_tracker_trip_stddev_fields';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Kilometer_Tracker_Trip_Stddev_Pop_Fields = {
  __typename?: 'kilometer_tracker_trip_stddev_pop_fields';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Kilometer_Tracker_Trip_Stddev_Samp_Fields = {
  __typename?: 'kilometer_tracker_trip_stddev_samp_fields';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "kilometer_tracker_trip" */
export type Kilometer_Tracker_Trip_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kilometer_Tracker_Trip_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kilometer_Tracker_Trip_Stream_Cursor_Value_Input = {
  end?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
  refilled_tank?: InputMaybe<Scalars['Boolean']['input']>;
  registered_by?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Kilometer_Tracker_Trip_Sum_Fields = {
  __typename?: 'kilometer_tracker_trip_sum_fields';
  end?: Maybe<Scalars['Int']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "kilometer_tracker.trip" */
export enum Kilometer_Tracker_Trip_Update_Column {
  /** column name */
  End = 'end',
  /** column name */
  Group = 'group',
  /** column name */
  RefilledTank = 'refilled_tank',
  /** column name */
  RegisteredBy = 'registered_by',
  /** column name */
  Start = 'start',
  /** column name */
  User = 'user'
}

export type Kilometer_Tracker_Trip_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Kilometer_Tracker_Trip_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kilometer_Tracker_Trip_Set_Input>;
  /** filter the rows which have to be updated */
  where: Kilometer_Tracker_Trip_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Kilometer_Tracker_Trip_Var_Pop_Fields = {
  __typename?: 'kilometer_tracker_trip_var_pop_fields';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Kilometer_Tracker_Trip_Var_Samp_Fields = {
  __typename?: 'kilometer_tracker_trip_var_samp_fields';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Kilometer_Tracker_Trip_Variance_Fields = {
  __typename?: 'kilometer_tracker_trip_variance_fields';
  end?: Maybe<Scalars['Float']['output']>;
  start?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "kilometer_tracker.user" */
export type Kilometer_Tracker_User = {
  __typename?: 'kilometer_tracker_user';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/** aggregated selection of "kilometer_tracker.user" */
export type Kilometer_Tracker_User_Aggregate = {
  __typename?: 'kilometer_tracker_user_aggregate';
  aggregate?: Maybe<Kilometer_Tracker_User_Aggregate_Fields>;
  nodes: Array<Kilometer_Tracker_User>;
};

/** aggregate fields of "kilometer_tracker.user" */
export type Kilometer_Tracker_User_Aggregate_Fields = {
  __typename?: 'kilometer_tracker_user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Kilometer_Tracker_User_Max_Fields>;
  min?: Maybe<Kilometer_Tracker_User_Min_Fields>;
};


/** aggregate fields of "kilometer_tracker.user" */
export type Kilometer_Tracker_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kilometer_Tracker_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "kilometer_tracker.user". All fields are combined with a logical 'AND'. */
export type Kilometer_Tracker_User_Bool_Exp = {
  _and?: InputMaybe<Array<Kilometer_Tracker_User_Bool_Exp>>;
  _not?: InputMaybe<Kilometer_Tracker_User_Bool_Exp>;
  _or?: InputMaybe<Array<Kilometer_Tracker_User_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code = {
  __typename?: 'kilometer_tracker_user_confirmation_code';
  code: Scalars['uuid']['output'];
  email: Scalars['String']['output'];
};

/** aggregated selection of "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_Aggregate = {
  __typename?: 'kilometer_tracker_user_confirmation_code_aggregate';
  aggregate?: Maybe<Kilometer_Tracker_User_Confirmation_Code_Aggregate_Fields>;
  nodes: Array<Kilometer_Tracker_User_Confirmation_Code>;
};

/** aggregate fields of "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_Aggregate_Fields = {
  __typename?: 'kilometer_tracker_user_confirmation_code_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Kilometer_Tracker_User_Confirmation_Code_Max_Fields>;
  min?: Maybe<Kilometer_Tracker_User_Confirmation_Code_Min_Fields>;
};


/** aggregate fields of "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "kilometer_tracker.user_confirmation_code". All fields are combined with a logical 'AND'. */
export type Kilometer_Tracker_User_Confirmation_Code_Bool_Exp = {
  _and?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>>;
  _not?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>;
  _or?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>>;
  code?: InputMaybe<Uuid_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kilometer_tracker.user_confirmation_code" */
export enum Kilometer_Tracker_User_Confirmation_Code_Constraint {
  /** unique or primary key constraint on columns "code" */
  UserConfirmationCodeCodeKey = 'user_confirmation_code_code_key',
  /** unique or primary key constraint on columns "email" */
  UserConfirmationCodePkey = 'user_confirmation_code_pkey'
}

/** input type for inserting data into table "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_Insert_Input = {
  code?: InputMaybe<Scalars['uuid']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Kilometer_Tracker_User_Confirmation_Code_Max_Fields = {
  __typename?: 'kilometer_tracker_user_confirmation_code_max_fields';
  code?: Maybe<Scalars['uuid']['output']>;
  email?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Kilometer_Tracker_User_Confirmation_Code_Min_Fields = {
  __typename?: 'kilometer_tracker_user_confirmation_code_min_fields';
  code?: Maybe<Scalars['uuid']['output']>;
  email?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_Mutation_Response = {
  __typename?: 'kilometer_tracker_user_confirmation_code_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Kilometer_Tracker_User_Confirmation_Code>;
};

/** on_conflict condition type for table "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_On_Conflict = {
  constraint: Kilometer_Tracker_User_Confirmation_Code_Constraint;
  update_columns?: Array<Kilometer_Tracker_User_Confirmation_Code_Update_Column>;
  where?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>;
};

/** Ordering options when selecting data from "kilometer_tracker.user_confirmation_code". */
export type Kilometer_Tracker_User_Confirmation_Code_Order_By = {
  code?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kilometer_tracker.user_confirmation_code */
export type Kilometer_Tracker_User_Confirmation_Code_Pk_Columns_Input = {
  email: Scalars['String']['input'];
};

/** select columns of table "kilometer_tracker.user_confirmation_code" */
export enum Kilometer_Tracker_User_Confirmation_Code_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Email = 'email'
}

/** input type for updating data in table "kilometer_tracker.user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_Set_Input = {
  code?: InputMaybe<Scalars['uuid']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "kilometer_tracker_user_confirmation_code" */
export type Kilometer_Tracker_User_Confirmation_Code_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kilometer_Tracker_User_Confirmation_Code_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kilometer_Tracker_User_Confirmation_Code_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['uuid']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "kilometer_tracker.user_confirmation_code" */
export enum Kilometer_Tracker_User_Confirmation_Code_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Email = 'email'
}

export type Kilometer_Tracker_User_Confirmation_Code_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Set_Input>;
  /** filter the rows which have to be updated */
  where: Kilometer_Tracker_User_Confirmation_Code_Bool_Exp;
};

/** unique or primary key constraints on table "kilometer_tracker.user" */
export enum Kilometer_Tracker_User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "kilometer_tracker.user" */
export type Kilometer_Tracker_User_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Kilometer_Tracker_User_Max_Fields = {
  __typename?: 'kilometer_tracker_user_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Kilometer_Tracker_User_Min_Fields = {
  __typename?: 'kilometer_tracker_user_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "kilometer_tracker.user" */
export type Kilometer_Tracker_User_Mutation_Response = {
  __typename?: 'kilometer_tracker_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Kilometer_Tracker_User>;
};

/** on_conflict condition type for table "kilometer_tracker.user" */
export type Kilometer_Tracker_User_On_Conflict = {
  constraint: Kilometer_Tracker_User_Constraint;
  update_columns?: Array<Kilometer_Tracker_User_Update_Column>;
  where?: InputMaybe<Kilometer_Tracker_User_Bool_Exp>;
};

/** Ordering options when selecting data from "kilometer_tracker.user". */
export type Kilometer_Tracker_User_Order_By = {
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kilometer_tracker.user */
export type Kilometer_Tracker_User_Pk_Columns_Input = {
  email: Scalars['String']['input'];
};

/** select columns of table "kilometer_tracker.user" */
export enum Kilometer_Tracker_User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Password = 'password',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "kilometer_tracker.user" */
export type Kilometer_Tracker_User_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status = {
  __typename?: 'kilometer_tracker_user_status';
  status: Scalars['String']['output'];
};

/** aggregated selection of "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status_Aggregate = {
  __typename?: 'kilometer_tracker_user_status_aggregate';
  aggregate?: Maybe<Kilometer_Tracker_User_Status_Aggregate_Fields>;
  nodes: Array<Kilometer_Tracker_User_Status>;
};

/** aggregate fields of "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status_Aggregate_Fields = {
  __typename?: 'kilometer_tracker_user_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Kilometer_Tracker_User_Status_Max_Fields>;
  min?: Maybe<Kilometer_Tracker_User_Status_Min_Fields>;
};


/** aggregate fields of "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kilometer_Tracker_User_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "kilometer_tracker.user_status". All fields are combined with a logical 'AND'. */
export type Kilometer_Tracker_User_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Kilometer_Tracker_User_Status_Bool_Exp>>;
  _not?: InputMaybe<Kilometer_Tracker_User_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Kilometer_Tracker_User_Status_Bool_Exp>>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kilometer_tracker.user_status" */
export enum Kilometer_Tracker_User_Status_Constraint {
  /** unique or primary key constraint on columns "status" */
  UserStatusPkey = 'user_status_pkey'
}

/** input type for inserting data into table "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status_Insert_Input = {
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Kilometer_Tracker_User_Status_Max_Fields = {
  __typename?: 'kilometer_tracker_user_status_max_fields';
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Kilometer_Tracker_User_Status_Min_Fields = {
  __typename?: 'kilometer_tracker_user_status_min_fields';
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status_Mutation_Response = {
  __typename?: 'kilometer_tracker_user_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Kilometer_Tracker_User_Status>;
};

/** on_conflict condition type for table "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status_On_Conflict = {
  constraint: Kilometer_Tracker_User_Status_Constraint;
  update_columns?: Array<Kilometer_Tracker_User_Status_Update_Column>;
  where?: InputMaybe<Kilometer_Tracker_User_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "kilometer_tracker.user_status". */
export type Kilometer_Tracker_User_Status_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kilometer_tracker.user_status */
export type Kilometer_Tracker_User_Status_Pk_Columns_Input = {
  status: Scalars['String']['input'];
};

/** select columns of table "kilometer_tracker.user_status" */
export enum Kilometer_Tracker_User_Status_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "kilometer_tracker.user_status" */
export type Kilometer_Tracker_User_Status_Set_Input = {
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "kilometer_tracker_user_status" */
export type Kilometer_Tracker_User_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kilometer_Tracker_User_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kilometer_Tracker_User_Status_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "kilometer_tracker.user_status" */
export enum Kilometer_Tracker_User_Status_Update_Column {
  /** column name */
  Status = 'status'
}

export type Kilometer_Tracker_User_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kilometer_Tracker_User_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Kilometer_Tracker_User_Status_Bool_Exp;
};

/** Streaming cursor of the table "kilometer_tracker_user" */
export type Kilometer_Tracker_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kilometer_Tracker_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kilometer_Tracker_User_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "kilometer_tracker.user" */
export enum Kilometer_Tracker_User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Password = 'password',
  /** column name */
  Status = 'status'
}

export type Kilometer_Tracker_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kilometer_Tracker_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Kilometer_Tracker_User_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** InsertGroupUser */
  InsertGroupUser?: Maybe<InsertGroupUserOutput>;
  /** delete data from the table: "kilometer_tracker.group" */
  delete_kilometer_tracker_group?: Maybe<Kilometer_Tracker_Group_Mutation_Response>;
  /** delete single row from the table: "kilometer_tracker.group" */
  delete_kilometer_tracker_group_by_pk?: Maybe<Kilometer_Tracker_Group>;
  /** delete data from the table: "kilometer_tracker.group_role" */
  delete_kilometer_tracker_group_role?: Maybe<Kilometer_Tracker_Group_Role_Mutation_Response>;
  /** delete single row from the table: "kilometer_tracker.group_role" */
  delete_kilometer_tracker_group_role_by_pk?: Maybe<Kilometer_Tracker_Group_Role>;
  /** delete data from the table: "kilometer_tracker.group_user" */
  delete_kilometer_tracker_group_user?: Maybe<Kilometer_Tracker_Group_User_Mutation_Response>;
  /** delete single row from the table: "kilometer_tracker.group_user" */
  delete_kilometer_tracker_group_user_by_pk?: Maybe<Kilometer_Tracker_Group_User>;
  /** delete data from the table: "kilometer_tracker.trip" */
  delete_kilometer_tracker_trip?: Maybe<Kilometer_Tracker_Trip_Mutation_Response>;
  /** delete single row from the table: "kilometer_tracker.trip" */
  delete_kilometer_tracker_trip_by_pk?: Maybe<Kilometer_Tracker_Trip>;
  /** delete data from the table: "kilometer_tracker.user" */
  delete_kilometer_tracker_user?: Maybe<Kilometer_Tracker_User_Mutation_Response>;
  /** delete single row from the table: "kilometer_tracker.user" */
  delete_kilometer_tracker_user_by_pk?: Maybe<Kilometer_Tracker_User>;
  /** delete data from the table: "kilometer_tracker.user_confirmation_code" */
  delete_kilometer_tracker_user_confirmation_code?: Maybe<Kilometer_Tracker_User_Confirmation_Code_Mutation_Response>;
  /** delete single row from the table: "kilometer_tracker.user_confirmation_code" */
  delete_kilometer_tracker_user_confirmation_code_by_pk?: Maybe<Kilometer_Tracker_User_Confirmation_Code>;
  /** delete data from the table: "kilometer_tracker.user_status" */
  delete_kilometer_tracker_user_status?: Maybe<Kilometer_Tracker_User_Status_Mutation_Response>;
  /** delete single row from the table: "kilometer_tracker.user_status" */
  delete_kilometer_tracker_user_status_by_pk?: Maybe<Kilometer_Tracker_User_Status>;
  /** insert data into the table: "kilometer_tracker.group" */
  insert_kilometer_tracker_group?: Maybe<Kilometer_Tracker_Group_Mutation_Response>;
  /** insert a single row into the table: "kilometer_tracker.group" */
  insert_kilometer_tracker_group_one?: Maybe<Kilometer_Tracker_Group>;
  /** insert data into the table: "kilometer_tracker.group_role" */
  insert_kilometer_tracker_group_role?: Maybe<Kilometer_Tracker_Group_Role_Mutation_Response>;
  /** insert a single row into the table: "kilometer_tracker.group_role" */
  insert_kilometer_tracker_group_role_one?: Maybe<Kilometer_Tracker_Group_Role>;
  /** insert data into the table: "kilometer_tracker.group_user" */
  insert_kilometer_tracker_group_user?: Maybe<Kilometer_Tracker_Group_User_Mutation_Response>;
  /** insert a single row into the table: "kilometer_tracker.group_user" */
  insert_kilometer_tracker_group_user_one?: Maybe<Kilometer_Tracker_Group_User>;
  /** insert data into the table: "kilometer_tracker.trip" */
  insert_kilometer_tracker_trip?: Maybe<Kilometer_Tracker_Trip_Mutation_Response>;
  /** insert a single row into the table: "kilometer_tracker.trip" */
  insert_kilometer_tracker_trip_one?: Maybe<Kilometer_Tracker_Trip>;
  /** insert data into the table: "kilometer_tracker.user" */
  insert_kilometer_tracker_user?: Maybe<Kilometer_Tracker_User_Mutation_Response>;
  /** insert data into the table: "kilometer_tracker.user_confirmation_code" */
  insert_kilometer_tracker_user_confirmation_code?: Maybe<Kilometer_Tracker_User_Confirmation_Code_Mutation_Response>;
  /** insert a single row into the table: "kilometer_tracker.user_confirmation_code" */
  insert_kilometer_tracker_user_confirmation_code_one?: Maybe<Kilometer_Tracker_User_Confirmation_Code>;
  /** insert a single row into the table: "kilometer_tracker.user" */
  insert_kilometer_tracker_user_one?: Maybe<Kilometer_Tracker_User>;
  /** insert data into the table: "kilometer_tracker.user_status" */
  insert_kilometer_tracker_user_status?: Maybe<Kilometer_Tracker_User_Status_Mutation_Response>;
  /** insert a single row into the table: "kilometer_tracker.user_status" */
  insert_kilometer_tracker_user_status_one?: Maybe<Kilometer_Tracker_User_Status>;
  /** update data of the table: "kilometer_tracker.group" */
  update_kilometer_tracker_group?: Maybe<Kilometer_Tracker_Group_Mutation_Response>;
  /** update single row of the table: "kilometer_tracker.group" */
  update_kilometer_tracker_group_by_pk?: Maybe<Kilometer_Tracker_Group>;
  /** update multiples rows of table: "kilometer_tracker.group" */
  update_kilometer_tracker_group_many?: Maybe<Array<Maybe<Kilometer_Tracker_Group_Mutation_Response>>>;
  /** update data of the table: "kilometer_tracker.group_role" */
  update_kilometer_tracker_group_role?: Maybe<Kilometer_Tracker_Group_Role_Mutation_Response>;
  /** update single row of the table: "kilometer_tracker.group_role" */
  update_kilometer_tracker_group_role_by_pk?: Maybe<Kilometer_Tracker_Group_Role>;
  /** update multiples rows of table: "kilometer_tracker.group_role" */
  update_kilometer_tracker_group_role_many?: Maybe<Array<Maybe<Kilometer_Tracker_Group_Role_Mutation_Response>>>;
  /** update data of the table: "kilometer_tracker.group_user" */
  update_kilometer_tracker_group_user?: Maybe<Kilometer_Tracker_Group_User_Mutation_Response>;
  /** update single row of the table: "kilometer_tracker.group_user" */
  update_kilometer_tracker_group_user_by_pk?: Maybe<Kilometer_Tracker_Group_User>;
  /** update multiples rows of table: "kilometer_tracker.group_user" */
  update_kilometer_tracker_group_user_many?: Maybe<Array<Maybe<Kilometer_Tracker_Group_User_Mutation_Response>>>;
  /** update data of the table: "kilometer_tracker.trip" */
  update_kilometer_tracker_trip?: Maybe<Kilometer_Tracker_Trip_Mutation_Response>;
  /** update single row of the table: "kilometer_tracker.trip" */
  update_kilometer_tracker_trip_by_pk?: Maybe<Kilometer_Tracker_Trip>;
  /** update multiples rows of table: "kilometer_tracker.trip" */
  update_kilometer_tracker_trip_many?: Maybe<Array<Maybe<Kilometer_Tracker_Trip_Mutation_Response>>>;
  /** update data of the table: "kilometer_tracker.user" */
  update_kilometer_tracker_user?: Maybe<Kilometer_Tracker_User_Mutation_Response>;
  /** update single row of the table: "kilometer_tracker.user" */
  update_kilometer_tracker_user_by_pk?: Maybe<Kilometer_Tracker_User>;
  /** update data of the table: "kilometer_tracker.user_confirmation_code" */
  update_kilometer_tracker_user_confirmation_code?: Maybe<Kilometer_Tracker_User_Confirmation_Code_Mutation_Response>;
  /** update single row of the table: "kilometer_tracker.user_confirmation_code" */
  update_kilometer_tracker_user_confirmation_code_by_pk?: Maybe<Kilometer_Tracker_User_Confirmation_Code>;
  /** update multiples rows of table: "kilometer_tracker.user_confirmation_code" */
  update_kilometer_tracker_user_confirmation_code_many?: Maybe<Array<Maybe<Kilometer_Tracker_User_Confirmation_Code_Mutation_Response>>>;
  /** update multiples rows of table: "kilometer_tracker.user" */
  update_kilometer_tracker_user_many?: Maybe<Array<Maybe<Kilometer_Tracker_User_Mutation_Response>>>;
  /** update data of the table: "kilometer_tracker.user_status" */
  update_kilometer_tracker_user_status?: Maybe<Kilometer_Tracker_User_Status_Mutation_Response>;
  /** update single row of the table: "kilometer_tracker.user_status" */
  update_kilometer_tracker_user_status_by_pk?: Maybe<Kilometer_Tracker_User_Status>;
  /** update multiples rows of table: "kilometer_tracker.user_status" */
  update_kilometer_tracker_user_status_many?: Maybe<Array<Maybe<Kilometer_Tracker_User_Status_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootInsertGroupUserArgs = {
  arg1: InsertGroupUserInput;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_GroupArgs = {
  where: Kilometer_Tracker_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_Group_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_Group_RoleArgs = {
  where: Kilometer_Tracker_Group_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_Group_Role_By_PkArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_Group_UserArgs = {
  where: Kilometer_Tracker_Group_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_Group_User_By_PkArgs = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_TripArgs = {
  where: Kilometer_Tracker_Trip_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_Trip_By_PkArgs = {
  group: Scalars['uuid']['input'];
  start: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_UserArgs = {
  where: Kilometer_Tracker_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_User_By_PkArgs = {
  email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_User_Confirmation_CodeArgs = {
  where: Kilometer_Tracker_User_Confirmation_Code_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_User_Confirmation_Code_By_PkArgs = {
  email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_User_StatusArgs = {
  where: Kilometer_Tracker_User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kilometer_Tracker_User_Status_By_PkArgs = {
  status: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_GroupArgs = {
  objects: Array<Kilometer_Tracker_Group_Insert_Input>;
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_Group_OneArgs = {
  object: Kilometer_Tracker_Group_Insert_Input;
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_Group_RoleArgs = {
  objects: Array<Kilometer_Tracker_Group_Role_Insert_Input>;
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_Group_Role_OneArgs = {
  object: Kilometer_Tracker_Group_Role_Insert_Input;
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_Group_UserArgs = {
  objects: Array<Kilometer_Tracker_Group_User_Insert_Input>;
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_Group_User_OneArgs = {
  object: Kilometer_Tracker_Group_User_Insert_Input;
  on_conflict?: InputMaybe<Kilometer_Tracker_Group_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_TripArgs = {
  objects: Array<Kilometer_Tracker_Trip_Insert_Input>;
  on_conflict?: InputMaybe<Kilometer_Tracker_Trip_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_Trip_OneArgs = {
  object: Kilometer_Tracker_Trip_Insert_Input;
  on_conflict?: InputMaybe<Kilometer_Tracker_Trip_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_UserArgs = {
  objects: Array<Kilometer_Tracker_User_Insert_Input>;
  on_conflict?: InputMaybe<Kilometer_Tracker_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_User_Confirmation_CodeArgs = {
  objects: Array<Kilometer_Tracker_User_Confirmation_Code_Insert_Input>;
  on_conflict?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_User_Confirmation_Code_OneArgs = {
  object: Kilometer_Tracker_User_Confirmation_Code_Insert_Input;
  on_conflict?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_User_OneArgs = {
  object: Kilometer_Tracker_User_Insert_Input;
  on_conflict?: InputMaybe<Kilometer_Tracker_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_User_StatusArgs = {
  objects: Array<Kilometer_Tracker_User_Status_Insert_Input>;
  on_conflict?: InputMaybe<Kilometer_Tracker_User_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kilometer_Tracker_User_Status_OneArgs = {
  object: Kilometer_Tracker_User_Status_Insert_Input;
  on_conflict?: InputMaybe<Kilometer_Tracker_User_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_GroupArgs = {
  _set?: InputMaybe<Kilometer_Tracker_Group_Set_Input>;
  where: Kilometer_Tracker_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_By_PkArgs = {
  _set?: InputMaybe<Kilometer_Tracker_Group_Set_Input>;
  pk_columns: Kilometer_Tracker_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_ManyArgs = {
  updates: Array<Kilometer_Tracker_Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_RoleArgs = {
  _set?: InputMaybe<Kilometer_Tracker_Group_Role_Set_Input>;
  where: Kilometer_Tracker_Group_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_Role_By_PkArgs = {
  _set?: InputMaybe<Kilometer_Tracker_Group_Role_Set_Input>;
  pk_columns: Kilometer_Tracker_Group_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_Role_ManyArgs = {
  updates: Array<Kilometer_Tracker_Group_Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_UserArgs = {
  _set?: InputMaybe<Kilometer_Tracker_Group_User_Set_Input>;
  where: Kilometer_Tracker_Group_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_User_By_PkArgs = {
  _set?: InputMaybe<Kilometer_Tracker_Group_User_Set_Input>;
  pk_columns: Kilometer_Tracker_Group_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Group_User_ManyArgs = {
  updates: Array<Kilometer_Tracker_Group_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_TripArgs = {
  _inc?: InputMaybe<Kilometer_Tracker_Trip_Inc_Input>;
  _set?: InputMaybe<Kilometer_Tracker_Trip_Set_Input>;
  where: Kilometer_Tracker_Trip_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Trip_By_PkArgs = {
  _inc?: InputMaybe<Kilometer_Tracker_Trip_Inc_Input>;
  _set?: InputMaybe<Kilometer_Tracker_Trip_Set_Input>;
  pk_columns: Kilometer_Tracker_Trip_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_Trip_ManyArgs = {
  updates: Array<Kilometer_Tracker_Trip_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_UserArgs = {
  _set?: InputMaybe<Kilometer_Tracker_User_Set_Input>;
  where: Kilometer_Tracker_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_By_PkArgs = {
  _set?: InputMaybe<Kilometer_Tracker_User_Set_Input>;
  pk_columns: Kilometer_Tracker_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_Confirmation_CodeArgs = {
  _set?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Set_Input>;
  where: Kilometer_Tracker_User_Confirmation_Code_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_Confirmation_Code_By_PkArgs = {
  _set?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Set_Input>;
  pk_columns: Kilometer_Tracker_User_Confirmation_Code_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_Confirmation_Code_ManyArgs = {
  updates: Array<Kilometer_Tracker_User_Confirmation_Code_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_ManyArgs = {
  updates: Array<Kilometer_Tracker_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_StatusArgs = {
  _set?: InputMaybe<Kilometer_Tracker_User_Status_Set_Input>;
  where: Kilometer_Tracker_User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_Status_By_PkArgs = {
  _set?: InputMaybe<Kilometer_Tracker_User_Status_Set_Input>;
  pk_columns: Kilometer_Tracker_User_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kilometer_Tracker_User_Status_ManyArgs = {
  updates: Array<Kilometer_Tracker_User_Status_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "kilometer_tracker.group" */
  kilometer_tracker_group: Array<Kilometer_Tracker_Group>;
  /** fetch aggregated fields from the table: "kilometer_tracker.group" */
  kilometer_tracker_group_aggregate: Kilometer_Tracker_Group_Aggregate;
  /** fetch data from the table: "kilometer_tracker.group" using primary key columns */
  kilometer_tracker_group_by_pk?: Maybe<Kilometer_Tracker_Group>;
  /** fetch data from the table: "kilometer_tracker.group_role" */
  kilometer_tracker_group_role: Array<Kilometer_Tracker_Group_Role>;
  /** fetch aggregated fields from the table: "kilometer_tracker.group_role" */
  kilometer_tracker_group_role_aggregate: Kilometer_Tracker_Group_Role_Aggregate;
  /** fetch data from the table: "kilometer_tracker.group_role" using primary key columns */
  kilometer_tracker_group_role_by_pk?: Maybe<Kilometer_Tracker_Group_Role>;
  /** fetch data from the table: "kilometer_tracker.group_user" */
  kilometer_tracker_group_user: Array<Kilometer_Tracker_Group_User>;
  /** fetch aggregated fields from the table: "kilometer_tracker.group_user" */
  kilometer_tracker_group_user_aggregate: Kilometer_Tracker_Group_User_Aggregate;
  /** fetch data from the table: "kilometer_tracker.group_user" using primary key columns */
  kilometer_tracker_group_user_by_pk?: Maybe<Kilometer_Tracker_Group_User>;
  /** fetch data from the table: "kilometer_tracker.trip" */
  kilometer_tracker_trip: Array<Kilometer_Tracker_Trip>;
  /** fetch aggregated fields from the table: "kilometer_tracker.trip" */
  kilometer_tracker_trip_aggregate: Kilometer_Tracker_Trip_Aggregate;
  /** fetch data from the table: "kilometer_tracker.trip" using primary key columns */
  kilometer_tracker_trip_by_pk?: Maybe<Kilometer_Tracker_Trip>;
  /** fetch data from the table: "kilometer_tracker.user" */
  kilometer_tracker_user: Array<Kilometer_Tracker_User>;
  /** fetch aggregated fields from the table: "kilometer_tracker.user" */
  kilometer_tracker_user_aggregate: Kilometer_Tracker_User_Aggregate;
  /** fetch data from the table: "kilometer_tracker.user" using primary key columns */
  kilometer_tracker_user_by_pk?: Maybe<Kilometer_Tracker_User>;
  /** fetch data from the table: "kilometer_tracker.user_confirmation_code" */
  kilometer_tracker_user_confirmation_code: Array<Kilometer_Tracker_User_Confirmation_Code>;
  /** fetch aggregated fields from the table: "kilometer_tracker.user_confirmation_code" */
  kilometer_tracker_user_confirmation_code_aggregate: Kilometer_Tracker_User_Confirmation_Code_Aggregate;
  /** fetch data from the table: "kilometer_tracker.user_confirmation_code" using primary key columns */
  kilometer_tracker_user_confirmation_code_by_pk?: Maybe<Kilometer_Tracker_User_Confirmation_Code>;
  /** fetch data from the table: "kilometer_tracker.user_status" */
  kilometer_tracker_user_status: Array<Kilometer_Tracker_User_Status>;
  /** fetch aggregated fields from the table: "kilometer_tracker.user_status" */
  kilometer_tracker_user_status_aggregate: Kilometer_Tracker_User_Status_Aggregate;
  /** fetch data from the table: "kilometer_tracker.user_status" using primary key columns */
  kilometer_tracker_user_status_by_pk?: Maybe<Kilometer_Tracker_User_Status>;
};


export type Query_RootKilometer_Tracker_GroupArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Group_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootKilometer_Tracker_Group_RoleArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Role_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Group_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Role_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Group_Role_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootKilometer_Tracker_Group_UserArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Group_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Group_User_By_PkArgs = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};


export type Query_RootKilometer_Tracker_TripArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Trip_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Trip_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Trip_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Trip_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Trip_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_Trip_By_PkArgs = {
  group: Scalars['uuid']['input'];
  start: Scalars['Int']['input'];
};


export type Query_RootKilometer_Tracker_UserArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_User_By_PkArgs = {
  email: Scalars['String']['input'];
};


export type Query_RootKilometer_Tracker_User_Confirmation_CodeArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_User_Confirmation_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_User_Confirmation_Code_By_PkArgs = {
  email: Scalars['String']['input'];
};


export type Query_RootKilometer_Tracker_User_StatusArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Status_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Status_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_User_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Status_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Status_Bool_Exp>;
};


export type Query_RootKilometer_Tracker_User_Status_By_PkArgs = {
  status: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "kilometer_tracker.group" */
  kilometer_tracker_group: Array<Kilometer_Tracker_Group>;
  /** fetch aggregated fields from the table: "kilometer_tracker.group" */
  kilometer_tracker_group_aggregate: Kilometer_Tracker_Group_Aggregate;
  /** fetch data from the table: "kilometer_tracker.group" using primary key columns */
  kilometer_tracker_group_by_pk?: Maybe<Kilometer_Tracker_Group>;
  /** fetch data from the table: "kilometer_tracker.group_role" */
  kilometer_tracker_group_role: Array<Kilometer_Tracker_Group_Role>;
  /** fetch aggregated fields from the table: "kilometer_tracker.group_role" */
  kilometer_tracker_group_role_aggregate: Kilometer_Tracker_Group_Role_Aggregate;
  /** fetch data from the table: "kilometer_tracker.group_role" using primary key columns */
  kilometer_tracker_group_role_by_pk?: Maybe<Kilometer_Tracker_Group_Role>;
  /** fetch data from the table in a streaming manner: "kilometer_tracker.group_role" */
  kilometer_tracker_group_role_stream: Array<Kilometer_Tracker_Group_Role>;
  /** fetch data from the table in a streaming manner: "kilometer_tracker.group" */
  kilometer_tracker_group_stream: Array<Kilometer_Tracker_Group>;
  /** fetch data from the table: "kilometer_tracker.group_user" */
  kilometer_tracker_group_user: Array<Kilometer_Tracker_Group_User>;
  /** fetch aggregated fields from the table: "kilometer_tracker.group_user" */
  kilometer_tracker_group_user_aggregate: Kilometer_Tracker_Group_User_Aggregate;
  /** fetch data from the table: "kilometer_tracker.group_user" using primary key columns */
  kilometer_tracker_group_user_by_pk?: Maybe<Kilometer_Tracker_Group_User>;
  /** fetch data from the table in a streaming manner: "kilometer_tracker.group_user" */
  kilometer_tracker_group_user_stream: Array<Kilometer_Tracker_Group_User>;
  /** fetch data from the table: "kilometer_tracker.trip" */
  kilometer_tracker_trip: Array<Kilometer_Tracker_Trip>;
  /** fetch aggregated fields from the table: "kilometer_tracker.trip" */
  kilometer_tracker_trip_aggregate: Kilometer_Tracker_Trip_Aggregate;
  /** fetch data from the table: "kilometer_tracker.trip" using primary key columns */
  kilometer_tracker_trip_by_pk?: Maybe<Kilometer_Tracker_Trip>;
  /** fetch data from the table in a streaming manner: "kilometer_tracker.trip" */
  kilometer_tracker_trip_stream: Array<Kilometer_Tracker_Trip>;
  /** fetch data from the table: "kilometer_tracker.user" */
  kilometer_tracker_user: Array<Kilometer_Tracker_User>;
  /** fetch aggregated fields from the table: "kilometer_tracker.user" */
  kilometer_tracker_user_aggregate: Kilometer_Tracker_User_Aggregate;
  /** fetch data from the table: "kilometer_tracker.user" using primary key columns */
  kilometer_tracker_user_by_pk?: Maybe<Kilometer_Tracker_User>;
  /** fetch data from the table: "kilometer_tracker.user_confirmation_code" */
  kilometer_tracker_user_confirmation_code: Array<Kilometer_Tracker_User_Confirmation_Code>;
  /** fetch aggregated fields from the table: "kilometer_tracker.user_confirmation_code" */
  kilometer_tracker_user_confirmation_code_aggregate: Kilometer_Tracker_User_Confirmation_Code_Aggregate;
  /** fetch data from the table: "kilometer_tracker.user_confirmation_code" using primary key columns */
  kilometer_tracker_user_confirmation_code_by_pk?: Maybe<Kilometer_Tracker_User_Confirmation_Code>;
  /** fetch data from the table in a streaming manner: "kilometer_tracker.user_confirmation_code" */
  kilometer_tracker_user_confirmation_code_stream: Array<Kilometer_Tracker_User_Confirmation_Code>;
  /** fetch data from the table: "kilometer_tracker.user_status" */
  kilometer_tracker_user_status: Array<Kilometer_Tracker_User_Status>;
  /** fetch aggregated fields from the table: "kilometer_tracker.user_status" */
  kilometer_tracker_user_status_aggregate: Kilometer_Tracker_User_Status_Aggregate;
  /** fetch data from the table: "kilometer_tracker.user_status" using primary key columns */
  kilometer_tracker_user_status_by_pk?: Maybe<Kilometer_Tracker_User_Status>;
  /** fetch data from the table in a streaming manner: "kilometer_tracker.user_status" */
  kilometer_tracker_user_status_stream: Array<Kilometer_Tracker_User_Status>;
  /** fetch data from the table in a streaming manner: "kilometer_tracker.user" */
  kilometer_tracker_user_stream: Array<Kilometer_Tracker_User>;
};


export type Subscription_RootKilometer_Tracker_GroupArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootKilometer_Tracker_Group_RoleArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Role_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_Role_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Role_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_Role_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootKilometer_Tracker_Group_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kilometer_Tracker_Group_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Role_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kilometer_Tracker_Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Kilometer_Tracker_Group_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_UserArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Group_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Group_User_By_PkArgs = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};


export type Subscription_RootKilometer_Tracker_Group_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kilometer_Tracker_Group_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Kilometer_Tracker_Group_User_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_TripArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Trip_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Trip_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Trip_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_Trip_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_Trip_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_Trip_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_Trip_By_PkArgs = {
  group: Scalars['uuid']['input'];
  start: Scalars['Int']['input'];
};


export type Subscription_RootKilometer_Tracker_Trip_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kilometer_Tracker_Trip_Stream_Cursor_Input>>;
  where?: InputMaybe<Kilometer_Tracker_Trip_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_UserArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_By_PkArgs = {
  email: Scalars['String']['input'];
};


export type Subscription_RootKilometer_Tracker_User_Confirmation_CodeArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_Confirmation_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Confirmation_Code_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_Confirmation_Code_By_PkArgs = {
  email: Scalars['String']['input'];
};


export type Subscription_RootKilometer_Tracker_User_Confirmation_Code_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Stream_Cursor_Input>>;
  where?: InputMaybe<Kilometer_Tracker_User_Confirmation_Code_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_StatusArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Status_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Status_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kilometer_Tracker_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kilometer_Tracker_User_Status_Order_By>>;
  where?: InputMaybe<Kilometer_Tracker_User_Status_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_Status_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Subscription_RootKilometer_Tracker_User_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kilometer_Tracker_User_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Kilometer_Tracker_User_Status_Bool_Exp>;
};


export type Subscription_RootKilometer_Tracker_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kilometer_Tracker_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Kilometer_Tracker_User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type InsertGroupUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type InsertGroupUserMutation = { __typename?: 'mutation_root', insert_kilometer_tracker_group_user_one?: { __typename?: 'kilometer_tracker_group_user', email: string, group: string, role: string } | null };

export type InsertGroupUserActionMutationVariables = Exact<{
  arg1: InsertGroupUserInput;
}>;


export type InsertGroupUserActionMutation = { __typename?: 'mutation_root', InsertGroupUser?: { __typename?: 'InsertGroupUserOutput', email?: string | null, group?: string | null, role?: string | null } | null };

export type InsertUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_kilometer_tracker_user_one?: { __typename?: 'kilometer_tracker_user', email: string } | null };

export type InsertUserConfirmationCodeMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type InsertUserConfirmationCodeMutation = { __typename?: 'mutation_root', insert_kilometer_tracker_user_confirmation_code_one?: { __typename?: 'kilometer_tracker_user_confirmation_code', email: string, code: string } | null };

export type QueryUserGroupsQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type QueryUserGroupsQuery = { __typename?: 'query_root', kilometer_tracker_group_user: Array<{ __typename?: 'kilometer_tracker_group_user', email: string, group: string, role: string, group_rel: { __typename?: 'kilometer_tracker_group', id: string, name: string } }> };

export type QueryUserLoginDetailsQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type QueryUserLoginDetailsQuery = { __typename?: 'query_root', kilometer_tracker_user: Array<{ __typename?: 'kilometer_tracker_user', email: string, password?: string | null, status: string }> };


export const InsertGroupUserDocument = gql`
    mutation InsertGroupUser($email: String!) {
  insert_kilometer_tracker_group_user_one(object: {email: $email}) {
    email
    group
    role
  }
}
    `;
export type InsertGroupUserMutationFn = Apollo.MutationFunction<InsertGroupUserMutation, InsertGroupUserMutationVariables>;

/**
 * __useInsertGroupUserMutation__
 *
 * To run a mutation, you first call `useInsertGroupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGroupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGroupUserMutation, { data, loading, error }] = useInsertGroupUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertGroupUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertGroupUserMutation, InsertGroupUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertGroupUserMutation, InsertGroupUserMutationVariables>(InsertGroupUserDocument, options);
      }
export type InsertGroupUserMutationHookResult = ReturnType<typeof useInsertGroupUserMutation>;
export type InsertGroupUserMutationResult = Apollo.MutationResult<InsertGroupUserMutation>;
export type InsertGroupUserMutationOptions = Apollo.BaseMutationOptions<InsertGroupUserMutation, InsertGroupUserMutationVariables>;
export const InsertGroupUserActionDocument = gql`
    mutation InsertGroupUserAction($arg1: InsertGroupUserInput!) {
  InsertGroupUser(arg1: $arg1) {
    email
    group
    role
  }
}
    `;
export type InsertGroupUserActionMutationFn = Apollo.MutationFunction<InsertGroupUserActionMutation, InsertGroupUserActionMutationVariables>;

/**
 * __useInsertGroupUserActionMutation__
 *
 * To run a mutation, you first call `useInsertGroupUserActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGroupUserActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGroupUserActionMutation, { data, loading, error }] = useInsertGroupUserActionMutation({
 *   variables: {
 *      arg1: // value for 'arg1'
 *   },
 * });
 */
export function useInsertGroupUserActionMutation(baseOptions?: Apollo.MutationHookOptions<InsertGroupUserActionMutation, InsertGroupUserActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertGroupUserActionMutation, InsertGroupUserActionMutationVariables>(InsertGroupUserActionDocument, options);
      }
export type InsertGroupUserActionMutationHookResult = ReturnType<typeof useInsertGroupUserActionMutation>;
export type InsertGroupUserActionMutationResult = Apollo.MutationResult<InsertGroupUserActionMutation>;
export type InsertGroupUserActionMutationOptions = Apollo.BaseMutationOptions<InsertGroupUserActionMutation, InsertGroupUserActionMutationVariables>;
export const InsertUserDocument = gql`
    mutation InsertUser($email: String!) {
  insert_kilometer_tracker_user_one(
    object: {email: $email, password: null, status: "AWAITING_CONFIRMATION", firstName: null, lastName: null}
  ) {
    email
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const InsertUserConfirmationCodeDocument = gql`
    mutation InsertUserConfirmationCode($email: String!) {
  insert_kilometer_tracker_user_confirmation_code_one(object: {email: $email}) {
    email
    code
  }
}
    `;
export type InsertUserConfirmationCodeMutationFn = Apollo.MutationFunction<InsertUserConfirmationCodeMutation, InsertUserConfirmationCodeMutationVariables>;

/**
 * __useInsertUserConfirmationCodeMutation__
 *
 * To run a mutation, you first call `useInsertUserConfirmationCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserConfirmationCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserConfirmationCodeMutation, { data, loading, error }] = useInsertUserConfirmationCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserConfirmationCodeMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserConfirmationCodeMutation, InsertUserConfirmationCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserConfirmationCodeMutation, InsertUserConfirmationCodeMutationVariables>(InsertUserConfirmationCodeDocument, options);
      }
export type InsertUserConfirmationCodeMutationHookResult = ReturnType<typeof useInsertUserConfirmationCodeMutation>;
export type InsertUserConfirmationCodeMutationResult = Apollo.MutationResult<InsertUserConfirmationCodeMutation>;
export type InsertUserConfirmationCodeMutationOptions = Apollo.BaseMutationOptions<InsertUserConfirmationCodeMutation, InsertUserConfirmationCodeMutationVariables>;
export const QueryUserGroupsDocument = gql`
    query QueryUserGroups($email: String!) {
  kilometer_tracker_group_user(where: {email: {_eq: $email}}) {
    email
    group
    role
    group_rel {
      id
      name
    }
  }
}
    `;

/**
 * __useQueryUserGroupsQuery__
 *
 * To run a query within a React component, call `useQueryUserGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserGroupsQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useQueryUserGroupsQuery(baseOptions: Apollo.QueryHookOptions<QueryUserGroupsQuery, QueryUserGroupsQueryVariables> & ({ variables: QueryUserGroupsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserGroupsQuery, QueryUserGroupsQueryVariables>(QueryUserGroupsDocument, options);
      }
export function useQueryUserGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserGroupsQuery, QueryUserGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserGroupsQuery, QueryUserGroupsQueryVariables>(QueryUserGroupsDocument, options);
        }
export function useQueryUserGroupsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryUserGroupsQuery, QueryUserGroupsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryUserGroupsQuery, QueryUserGroupsQueryVariables>(QueryUserGroupsDocument, options);
        }
export type QueryUserGroupsQueryHookResult = ReturnType<typeof useQueryUserGroupsQuery>;
export type QueryUserGroupsLazyQueryHookResult = ReturnType<typeof useQueryUserGroupsLazyQuery>;
export type QueryUserGroupsSuspenseQueryHookResult = ReturnType<typeof useQueryUserGroupsSuspenseQuery>;
export type QueryUserGroupsQueryResult = Apollo.QueryResult<QueryUserGroupsQuery, QueryUserGroupsQueryVariables>;
export const QueryUserLoginDetailsDocument = gql`
    query QueryUserLoginDetails($email: String!) {
  kilometer_tracker_user(where: {email: {_eq: $email}}) {
    email
    password
    status
  }
}
    `;

/**
 * __useQueryUserLoginDetailsQuery__
 *
 * To run a query within a React component, call `useQueryUserLoginDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserLoginDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserLoginDetailsQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useQueryUserLoginDetailsQuery(baseOptions: Apollo.QueryHookOptions<QueryUserLoginDetailsQuery, QueryUserLoginDetailsQueryVariables> & ({ variables: QueryUserLoginDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserLoginDetailsQuery, QueryUserLoginDetailsQueryVariables>(QueryUserLoginDetailsDocument, options);
      }
export function useQueryUserLoginDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserLoginDetailsQuery, QueryUserLoginDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserLoginDetailsQuery, QueryUserLoginDetailsQueryVariables>(QueryUserLoginDetailsDocument, options);
        }
export function useQueryUserLoginDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryUserLoginDetailsQuery, QueryUserLoginDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryUserLoginDetailsQuery, QueryUserLoginDetailsQueryVariables>(QueryUserLoginDetailsDocument, options);
        }
export type QueryUserLoginDetailsQueryHookResult = ReturnType<typeof useQueryUserLoginDetailsQuery>;
export type QueryUserLoginDetailsLazyQueryHookResult = ReturnType<typeof useQueryUserLoginDetailsLazyQuery>;
export type QueryUserLoginDetailsSuspenseQueryHookResult = ReturnType<typeof useQueryUserLoginDetailsSuspenseQuery>;
export type QueryUserLoginDetailsQueryResult = Apollo.QueryResult<QueryUserLoginDetailsQuery, QueryUserLoginDetailsQueryVariables>;