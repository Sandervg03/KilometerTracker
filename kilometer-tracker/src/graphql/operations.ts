// Auto-generated GraphQL operations - DO NOT EDIT MANUALLY
// Run 'npm run generate-operations' to regenerate this file

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

export const QUERY_PASSWORD_BY_EMAIL = `query QueryPasswordByEmail($email: String!) {
  password(where: { email: { _eq: $email } }) {
    email
    password
  }
}`;
