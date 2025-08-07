export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
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

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: 'group';
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
};


/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Bool_Exp>>;
  _not?: InputMaybe<Group_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupPkey = 'group_pkey'
}

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  __typename?: 'group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** on_conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns?: Array<Group_Update_Column>;
  where?: InputMaybe<Group_Bool_Exp>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner'
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "group" */
export type Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Group_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner'
}

export type Group_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Group_Bool_Exp;
};

/** columns and relationships of "group_users" */
export type Group_Users = {
  __typename?: 'group_users';
  email: Scalars['String']['output'];
  group: Scalars['uuid']['output'];
};

/** aggregated selection of "group_users" */
export type Group_Users_Aggregate = {
  __typename?: 'group_users_aggregate';
  aggregate?: Maybe<Group_Users_Aggregate_Fields>;
  nodes: Array<Group_Users>;
};

/** aggregate fields of "group_users" */
export type Group_Users_Aggregate_Fields = {
  __typename?: 'group_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Group_Users_Max_Fields>;
  min?: Maybe<Group_Users_Min_Fields>;
};


/** aggregate fields of "group_users" */
export type Group_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "group_users". All fields are combined with a logical 'AND'. */
export type Group_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Users_Bool_Exp>>;
  _not?: InputMaybe<Group_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  group?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_users" */
export enum Group_Users_Constraint {
  /** unique or primary key constraint on columns "email", "group" */
  GroupUsersPkey = 'group_users_pkey'
}

/** input type for inserting data into table "group_users" */
export type Group_Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Group_Users_Max_Fields = {
  __typename?: 'group_users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Group_Users_Min_Fields = {
  __typename?: 'group_users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "group_users" */
export type Group_Users_Mutation_Response = {
  __typename?: 'group_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Users>;
};

/** on_conflict condition type for table "group_users" */
export type Group_Users_On_Conflict = {
  constraint: Group_Users_Constraint;
  update_columns?: Array<Group_Users_Update_Column>;
  where?: InputMaybe<Group_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "group_users". */
export type Group_Users_Order_By = {
  email?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
};

/** primary key columns input for table: group_users */
export type Group_Users_Pk_Columns_Input = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};

/** select columns of table "group_users" */
export enum Group_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Group = 'group'
}

/** input type for updating data in table "group_users" */
export type Group_Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "group_users" */
export type Group_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Group_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Group_Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "group_users" */
export enum Group_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Group = 'group'
}

export type Group_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Group_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "group_users" */
  delete_group_users?: Maybe<Group_Users_Mutation_Response>;
  /** delete single row from the table: "group_users" */
  delete_group_users_by_pk?: Maybe<Group_Users>;
  /** delete data from the table: "password" */
  delete_password?: Maybe<Password_Mutation_Response>;
  /** delete single row from the table: "password" */
  delete_password_by_pk?: Maybe<Password>;
  /** delete data from the table: "trips" */
  delete_trips?: Maybe<Trips_Mutation_Response>;
  /** delete single row from the table: "trips" */
  delete_trips_by_pk?: Maybe<Trips>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "group_users" */
  insert_group_users?: Maybe<Group_Users_Mutation_Response>;
  /** insert a single row into the table: "group_users" */
  insert_group_users_one?: Maybe<Group_Users>;
  /** insert data into the table: "password" */
  insert_password?: Maybe<Password_Mutation_Response>;
  /** insert a single row into the table: "password" */
  insert_password_one?: Maybe<Password>;
  /** insert data into the table: "trips" */
  insert_trips?: Maybe<Trips_Mutation_Response>;
  /** insert a single row into the table: "trips" */
  insert_trips_one?: Maybe<Trips>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update multiples rows of table: "group" */
  update_group_many?: Maybe<Array<Maybe<Group_Mutation_Response>>>;
  /** update data of the table: "group_users" */
  update_group_users?: Maybe<Group_Users_Mutation_Response>;
  /** update single row of the table: "group_users" */
  update_group_users_by_pk?: Maybe<Group_Users>;
  /** update multiples rows of table: "group_users" */
  update_group_users_many?: Maybe<Array<Maybe<Group_Users_Mutation_Response>>>;
  /** update data of the table: "password" */
  update_password?: Maybe<Password_Mutation_Response>;
  /** update single row of the table: "password" */
  update_password_by_pk?: Maybe<Password>;
  /** update multiples rows of table: "password" */
  update_password_many?: Maybe<Array<Maybe<Password_Mutation_Response>>>;
  /** update data of the table: "trips" */
  update_trips?: Maybe<Trips_Mutation_Response>;
  /** update single row of the table: "trips" */
  update_trips_by_pk?: Maybe<Trips>;
  /** update multiples rows of table: "trips" */
  update_trips_many?: Maybe<Array<Maybe<Trips_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Group_UsersArgs = {
  where: Group_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Users_By_PkArgs = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PasswordArgs = {
  where: Password_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Password_By_PkArgs = {
  email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TripsArgs = {
  where: Trips_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trips_By_PkArgs = {
  current_mileage: Scalars['Int']['input'];
  group: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_UsersArgs = {
  objects: Array<Group_Users_Insert_Input>;
  on_conflict?: InputMaybe<Group_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Users_OneArgs = {
  object: Group_Users_Insert_Input;
  on_conflict?: InputMaybe<Group_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PasswordArgs = {
  objects: Array<Password_Insert_Input>;
  on_conflict?: InputMaybe<Password_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Password_OneArgs = {
  object: Password_Insert_Input;
  on_conflict?: InputMaybe<Password_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TripsArgs = {
  objects: Array<Trips_Insert_Input>;
  on_conflict?: InputMaybe<Trips_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trips_OneArgs = {
  object: Trips_Insert_Input;
  on_conflict?: InputMaybe<Trips_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _set?: InputMaybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _set?: InputMaybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_ManyArgs = {
  updates: Array<Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_UsersArgs = {
  _set?: InputMaybe<Group_Users_Set_Input>;
  where: Group_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Users_By_PkArgs = {
  _set?: InputMaybe<Group_Users_Set_Input>;
  pk_columns: Group_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Users_ManyArgs = {
  updates: Array<Group_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PasswordArgs = {
  _set?: InputMaybe<Password_Set_Input>;
  where: Password_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Password_By_PkArgs = {
  _set?: InputMaybe<Password_Set_Input>;
  pk_columns: Password_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Password_ManyArgs = {
  updates: Array<Password_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TripsArgs = {
  _inc?: InputMaybe<Trips_Inc_Input>;
  _set?: InputMaybe<Trips_Set_Input>;
  where: Trips_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trips_By_PkArgs = {
  _inc?: InputMaybe<Trips_Inc_Input>;
  _set?: InputMaybe<Trips_Set_Input>;
  pk_columns: Trips_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trips_ManyArgs = {
  updates: Array<Trips_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
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

/** columns and relationships of "password" */
export type Password = {
  __typename?: 'password';
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

/** aggregated selection of "password" */
export type Password_Aggregate = {
  __typename?: 'password_aggregate';
  aggregate?: Maybe<Password_Aggregate_Fields>;
  nodes: Array<Password>;
};

/** aggregate fields of "password" */
export type Password_Aggregate_Fields = {
  __typename?: 'password_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Password_Max_Fields>;
  min?: Maybe<Password_Min_Fields>;
};


/** aggregate fields of "password" */
export type Password_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Password_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "password". All fields are combined with a logical 'AND'. */
export type Password_Bool_Exp = {
  _and?: InputMaybe<Array<Password_Bool_Exp>>;
  _not?: InputMaybe<Password_Bool_Exp>;
  _or?: InputMaybe<Array<Password_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "password" */
export enum Password_Constraint {
  /** unique or primary key constraint on columns "email" */
  PasswordPkey = 'password_pkey'
}

/** input type for inserting data into table "password" */
export type Password_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Password_Max_Fields = {
  __typename?: 'password_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Password_Min_Fields = {
  __typename?: 'password_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "password" */
export type Password_Mutation_Response = {
  __typename?: 'password_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Password>;
};

/** on_conflict condition type for table "password" */
export type Password_On_Conflict = {
  constraint: Password_Constraint;
  update_columns?: Array<Password_Update_Column>;
  where?: InputMaybe<Password_Bool_Exp>;
};

/** Ordering options when selecting data from "password". */
export type Password_Order_By = {
  email?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
};

/** primary key columns input for table: password */
export type Password_Pk_Columns_Input = {
  email: Scalars['String']['input'];
};

/** select columns of table "password" */
export enum Password_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "password" */
export type Password_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "password" */
export type Password_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Password_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Password_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "password" */
export enum Password_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Password = 'password'
}

export type Password_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Password_Set_Input>;
  /** filter the rows which have to be updated */
  where: Password_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "group_users" */
  group_users: Array<Group_Users>;
  /** fetch aggregated fields from the table: "group_users" */
  group_users_aggregate: Group_Users_Aggregate;
  /** fetch data from the table: "group_users" using primary key columns */
  group_users_by_pk?: Maybe<Group_Users>;
  /** fetch data from the table: "password" */
  password: Array<Password>;
  /** fetch aggregated fields from the table: "password" */
  password_aggregate: Password_Aggregate;
  /** fetch data from the table: "password" using primary key columns */
  password_by_pk?: Maybe<Password>;
  /** fetch data from the table: "trips" */
  trips: Array<Trips>;
  /** fetch aggregated fields from the table: "trips" */
  trips_aggregate: Trips_Aggregate;
  /** fetch data from the table: "trips" using primary key columns */
  trips_by_pk?: Maybe<Trips>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGroup_UsersArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Users_Order_By>>;
  where?: InputMaybe<Group_Users_Bool_Exp>;
};


export type Query_RootGroup_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Users_Order_By>>;
  where?: InputMaybe<Group_Users_Bool_Exp>;
};


export type Query_RootGroup_Users_By_PkArgs = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};


export type Query_RootPasswordArgs = {
  distinct_on?: InputMaybe<Array<Password_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Order_By>>;
  where?: InputMaybe<Password_Bool_Exp>;
};


export type Query_RootPassword_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Order_By>>;
  where?: InputMaybe<Password_Bool_Exp>;
};


export type Query_RootPassword_By_PkArgs = {
  email: Scalars['String']['input'];
};


export type Query_RootTripsArgs = {
  distinct_on?: InputMaybe<Array<Trips_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trips_Order_By>>;
  where?: InputMaybe<Trips_Bool_Exp>;
};


export type Query_RootTrips_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trips_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trips_Order_By>>;
  where?: InputMaybe<Trips_Bool_Exp>;
};


export type Query_RootTrips_By_PkArgs = {
  current_mileage: Scalars['Int']['input'];
  group: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  email: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table in a streaming manner: "group" */
  group_stream: Array<Group>;
  /** fetch data from the table: "group_users" */
  group_users: Array<Group_Users>;
  /** fetch aggregated fields from the table: "group_users" */
  group_users_aggregate: Group_Users_Aggregate;
  /** fetch data from the table: "group_users" using primary key columns */
  group_users_by_pk?: Maybe<Group_Users>;
  /** fetch data from the table in a streaming manner: "group_users" */
  group_users_stream: Array<Group_Users>;
  /** fetch data from the table: "password" */
  password: Array<Password>;
  /** fetch aggregated fields from the table: "password" */
  password_aggregate: Password_Aggregate;
  /** fetch data from the table: "password" using primary key columns */
  password_by_pk?: Maybe<Password>;
  /** fetch data from the table in a streaming manner: "password" */
  password_stream: Array<Password>;
  /** fetch data from the table: "trips" */
  trips: Array<Trips>;
  /** fetch aggregated fields from the table: "trips" */
  trips_aggregate: Trips_Aggregate;
  /** fetch data from the table: "trips" using primary key columns */
  trips_by_pk?: Maybe<Trips>;
  /** fetch data from the table in a streaming manner: "trips" */
  trips_stream: Array<Trips>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGroup_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_UsersArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Users_Order_By>>;
  where?: InputMaybe<Group_Users_Bool_Exp>;
};


export type Subscription_RootGroup_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Users_Order_By>>;
  where?: InputMaybe<Group_Users_Bool_Exp>;
};


export type Subscription_RootGroup_Users_By_PkArgs = {
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
};


export type Subscription_RootGroup_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Group_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Group_Users_Bool_Exp>;
};


export type Subscription_RootPasswordArgs = {
  distinct_on?: InputMaybe<Array<Password_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Order_By>>;
  where?: InputMaybe<Password_Bool_Exp>;
};


export type Subscription_RootPassword_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Password_Order_By>>;
  where?: InputMaybe<Password_Bool_Exp>;
};


export type Subscription_RootPassword_By_PkArgs = {
  email: Scalars['String']['input'];
};


export type Subscription_RootPassword_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Password_Stream_Cursor_Input>>;
  where?: InputMaybe<Password_Bool_Exp>;
};


export type Subscription_RootTripsArgs = {
  distinct_on?: InputMaybe<Array<Trips_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trips_Order_By>>;
  where?: InputMaybe<Trips_Bool_Exp>;
};


export type Subscription_RootTrips_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trips_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trips_Order_By>>;
  where?: InputMaybe<Trips_Bool_Exp>;
};


export type Subscription_RootTrips_By_PkArgs = {
  current_mileage: Scalars['Int']['input'];
  group: Scalars['uuid']['input'];
};


export type Subscription_RootTrips_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Trips_Stream_Cursor_Input>>;
  where?: InputMaybe<Trips_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  email: Scalars['String']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "trips" */
export type Trips = {
  __typename?: 'trips';
  current_mileage: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  filled_tank: Scalars['Boolean']['output'];
  group: Scalars['uuid']['output'];
};

/** aggregated selection of "trips" */
export type Trips_Aggregate = {
  __typename?: 'trips_aggregate';
  aggregate?: Maybe<Trips_Aggregate_Fields>;
  nodes: Array<Trips>;
};

/** aggregate fields of "trips" */
export type Trips_Aggregate_Fields = {
  __typename?: 'trips_aggregate_fields';
  avg?: Maybe<Trips_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Trips_Max_Fields>;
  min?: Maybe<Trips_Min_Fields>;
  stddev?: Maybe<Trips_Stddev_Fields>;
  stddev_pop?: Maybe<Trips_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trips_Stddev_Samp_Fields>;
  sum?: Maybe<Trips_Sum_Fields>;
  var_pop?: Maybe<Trips_Var_Pop_Fields>;
  var_samp?: Maybe<Trips_Var_Samp_Fields>;
  variance?: Maybe<Trips_Variance_Fields>;
};


/** aggregate fields of "trips" */
export type Trips_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trips_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Trips_Avg_Fields = {
  __typename?: 'trips_avg_fields';
  current_mileage?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "trips". All fields are combined with a logical 'AND'. */
export type Trips_Bool_Exp = {
  _and?: InputMaybe<Array<Trips_Bool_Exp>>;
  _not?: InputMaybe<Trips_Bool_Exp>;
  _or?: InputMaybe<Array<Trips_Bool_Exp>>;
  current_mileage?: InputMaybe<Int_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  filled_tank?: InputMaybe<Boolean_Comparison_Exp>;
  group?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "trips" */
export enum Trips_Constraint {
  /** unique or primary key constraint on columns "current_mileage", "group" */
  TripsPkey = 'trips_pkey'
}

/** input type for incrementing numeric columns in table "trips" */
export type Trips_Inc_Input = {
  current_mileage?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "trips" */
export type Trips_Insert_Input = {
  current_mileage?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  filled_tank?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Trips_Max_Fields = {
  __typename?: 'trips_max_fields';
  current_mileage?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Trips_Min_Fields = {
  __typename?: 'trips_min_fields';
  current_mileage?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "trips" */
export type Trips_Mutation_Response = {
  __typename?: 'trips_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Trips>;
};

/** on_conflict condition type for table "trips" */
export type Trips_On_Conflict = {
  constraint: Trips_Constraint;
  update_columns?: Array<Trips_Update_Column>;
  where?: InputMaybe<Trips_Bool_Exp>;
};

/** Ordering options when selecting data from "trips". */
export type Trips_Order_By = {
  current_mileage?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  filled_tank?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trips */
export type Trips_Pk_Columns_Input = {
  current_mileage: Scalars['Int']['input'];
  group: Scalars['uuid']['input'];
};

/** select columns of table "trips" */
export enum Trips_Select_Column {
  /** column name */
  CurrentMileage = 'current_mileage',
  /** column name */
  Email = 'email',
  /** column name */
  FilledTank = 'filled_tank',
  /** column name */
  Group = 'group'
}

/** input type for updating data in table "trips" */
export type Trips_Set_Input = {
  current_mileage?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  filled_tank?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Trips_Stddev_Fields = {
  __typename?: 'trips_stddev_fields';
  current_mileage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Trips_Stddev_Pop_Fields = {
  __typename?: 'trips_stddev_pop_fields';
  current_mileage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Trips_Stddev_Samp_Fields = {
  __typename?: 'trips_stddev_samp_fields';
  current_mileage?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "trips" */
export type Trips_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Trips_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Trips_Stream_Cursor_Value_Input = {
  current_mileage?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  filled_tank?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Trips_Sum_Fields = {
  __typename?: 'trips_sum_fields';
  current_mileage?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "trips" */
export enum Trips_Update_Column {
  /** column name */
  CurrentMileage = 'current_mileage',
  /** column name */
  Email = 'email',
  /** column name */
  FilledTank = 'filled_tank',
  /** column name */
  Group = 'group'
}

export type Trips_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Trips_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Trips_Set_Input>;
  /** filter the rows which have to be updated */
  where: Trips_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Trips_Var_Pop_Fields = {
  __typename?: 'trips_var_pop_fields';
  current_mileage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Trips_Var_Samp_Fields = {
  __typename?: 'trips_var_samp_fields';
  current_mileage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Trips_Variance_Fields = {
  __typename?: 'trips_variance_fields';
  current_mileage?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['date']['output'];
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  email: Scalars['String']['input'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
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

export type InsertGroupMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  owner: Scalars['String']['input'];
}>;


export type InsertGroupMutation = { __typename?: 'mutation_root', insert_group?: { __typename?: 'group_mutation_response', affected_rows: number } | null, insert_group_users?: { __typename?: 'group_users_mutation_response', affected_rows: number } | null };

export type InsertGroupUserMutationVariables = Exact<{
  groupId?: InputMaybe<Scalars['uuid']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertGroupUserMutation = { __typename?: 'mutation_root', insert_group_users?: { __typename?: 'group_users_mutation_response', affected_rows: number } | null };

export type InsertTripMutationVariables = Exact<{
  currentMileage: Scalars['Int']['input'];
  filledTank: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  group: Scalars['uuid']['input'];
}>;


export type InsertTripMutation = { __typename?: 'mutation_root', insert_trips?: { __typename?: 'trips_mutation_response', affected_rows: number } | null };

export type InsertPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type InsertPasswordMutation = { __typename?: 'mutation_root', insert_password?: { __typename?: 'password_mutation_response', affected_rows: number } | null };

export type RegisterUserWithPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  createdAt: Scalars['date']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterUserWithPasswordMutation = { __typename?: 'mutation_root', insert_user?: { __typename?: 'user_mutation_response', affected_rows: number } | null, insert_password?: { __typename?: 'password_mutation_response', affected_rows: number } | null };

export type RenameGroupMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameGroupMutation = { __typename?: 'mutation_root', update_group?: { __typename?: 'group_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'group', id: string, name?: string | null, owner: string }> } | null };

export type InsertUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  createdAt: Scalars['date']['input'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_user?: { __typename?: 'user_mutation_response', affected_rows: number } | null };

export type GroupByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GroupByIdQuery = { __typename?: 'query_root', group: Array<{ __typename?: 'group', id: string, name?: string | null, owner: string }> };

export type GroupUsersByGroupIdQueryVariables = Exact<{
  groupId: Scalars['uuid']['input'];
}>;


export type GroupUsersByGroupIdQuery = { __typename?: 'query_root', group_users: Array<{ __typename?: 'group_users', email: string, group: string }> };

export type GroupsByUserEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GroupsByUserEmailQuery = { __typename?: 'query_root', group_users: Array<{ __typename?: 'group_users', email: string, group: string }> };

export type QueryPasswordByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type QueryPasswordByEmailQuery = { __typename?: 'query_root', password: Array<{ __typename?: 'password', email: string, password: string }> };

export type TripsByGroupQueryVariables = Exact<{
  group: Scalars['uuid']['input'];
}>;


export type TripsByGroupQuery = { __typename?: 'query_root', trips: Array<{ __typename?: 'trips', current_mileage: number, email: string, filled_tank: boolean, group: string }> };

export type QueryUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type QueryUserByEmailQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', created_at: any, email: string, first_name: string, last_name: string }> };
