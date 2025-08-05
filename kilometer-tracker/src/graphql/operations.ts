// Auto-generated GraphQL operations - DO NOT EDIT MANUALLY
// Run 'npm run generate-operations' to regenerate this file

export const INSERT_GROUP = `mutation InsertGroup(
    $id: uuid!
    $owner: String!
) {
  insert_group(
    objects: [
        { 
            id: $id
            owner: $owner 
        }
    ]
  ) {
    affected_rows
  }

  insert_group_users(
    objects: [
      { group: $id, email: $owner }
    ]
  ) {
    affected_rows
  }
}`;

export const INSERT_GROUP_USER = `mutation InsertGroupUser($groupId: uuid, $userEmail: String) {
  insert_group_users(
    objects: [
      {
        group: $groupId
        email: $userEmail
      }
    ]
  ) {
    affected_rows
  }
}`;

export const INSERT_PASSWORD = `mutation InsertPassword(
  $email: String!
  $password: String!
) {
  insert_password(
    objects: [
      {
        email: $email
        password: $password
      }
    ]
  ) {
    affected_rows
  }
}`;

export const REGISTER_USER_WITH_PASSWORD = `mutation RegisterUserWithPassword(
  $email: String!
  $firstName: String!
  $lastName: String!
  $createdAt: date!
  $password: String!
) {
  insert_user(
    objects: [
      {
        email: $email
        first_name: $firstName
        last_name: $lastName
        created_at: $createdAt
      }
    ]
  ) {
    affected_rows
  }

  insert_password(objects: [{ email: $email, password: $password }]) {
    affected_rows
  }
}`;

export const INSERT_USER = `mutation InsertUser(
  $email: String!
  $firstName: String!
  $lastName: String!
  $createdAt: date!
) {
  insert_user(
    objects: [
      {
        email: $email
        first_name: $firstName
        last_name: $lastName
        created_at: $createdAt
      }
    ]
  ) {
    affected_rows
  }
}`;

export const GROUP_BY_ID = `query GroupById($id: uuid!) {
  group(where: { id: { _eq: $id } }) {
    id
    name
    owner
  }
}`;

export const GROUPS_BY_USER_EMAIL = `query GroupsByUserEmail($email: String!) {
  group_users(where: {email: {_eq: $email}}) {
    email
    group
  }
}`;

export const QUERY_PASSWORD_BY_EMAIL = `query QueryPasswordByEmail($email: String!) {
  password(where: { email: { _eq: $email } }) {
    email
    password
  }
}`;

export const QUERY_USER_BY_EMAIL = `query QueryUserByEmail($email: String!) {
  user(where: { email: { _eq: $email } }) {
    created_at
    email
    first_name
    last_name
  }
}`;
