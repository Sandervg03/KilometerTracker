import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';

// Load environment variables from .env.local
dotenvConfig({ path: '.env.local' });

const getGraphQLUrl = () => {
  // if (process.env.NODE_ENV === 'development') {
  // }
  return process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL_DEV || 'http://localhost:8080/v1/graphql';
  // return process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL || 'http://localhost:8080/v1/graphql';
};

const getAdminSecret = () => {
  // if (process.env.NODE_ENV === 'development') {
  // }
  return process.env.HASURA_GRAPHQL_ADMIN_SECRET_DEV || '';
  // return process.env.HASURA_GRAPHQL_ADMIN_SECRET || '';
};

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [getGraphQLUrl()]: {
        headers: {
          "x-hasura-admin-secret": getAdminSecret(),
        },
      },
    },
  ],
  documents: ["src/graphql/**/*.graphql", "src/**/*.{ts,tsx}"],
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        scalars: {
          uuid: "string",
        },
        withHooks: true,
      },
    },
  },
};

export default config;
