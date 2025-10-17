import {
  InsertGroupUserActionMutationVariables,
  InsertGroupUserDocument,
  InsertGroupUserMutation,
  InsertGroupUserMutationVariables,
  InsertUserConfirmationCodeDocument,
  InsertUserConfirmationCodeMutation,
  InsertUserConfirmationCodeMutationVariables,
  InsertUserDocument,
  InsertUserMutation,
  InsertUserMutationVariables,
  QueryUserLoginDetailsDocument,
  QueryUserLoginDetailsQuery,
  QueryUserLoginDetailsQueryVariables,
} from "@/generated/graphql";
import { apolloClient } from "@/lib/apolloClient";
import { NextResponse } from "next/server";

export default async function insertGroupUser(input: InsertGroupUserActionMutationVariables) {
  try {
    const userLoginDetailsResult = await apolloClient.query<
      QueryUserLoginDetailsQuery,
      QueryUserLoginDetailsQueryVariables
    >({
      query: QueryUserLoginDetailsDocument,
      variables: { email: input.arg1.email },
    });

    if (userLoginDetailsResult.errors) {
      return NextResponse.json(
        { error: "Failed to fetch user" },
        { status: 500 }
      );
    }

    const user = userLoginDetailsResult.data?.kilometer_tracker_user[0];
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const insertUserResult = await apolloClient.mutate<
      InsertUserMutation,
      InsertUserMutationVariables
    >({
      mutation: InsertUserDocument,
      variables: { email: input.arg1.email },
    });

    if (insertUserResult.errors) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    const insertedUser = insertUserResult.data?.insert_kilometer_tracker_user_one;
    if (!insertedUser) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    const insertUserConfirmationCodeResult = await apolloClient.mutate<
      InsertUserConfirmationCodeMutation,
      InsertUserConfirmationCodeMutationVariables
    >({
      mutation: InsertUserConfirmationCodeDocument,
      variables: { email: input.arg1.email },
    });

    if (insertUserConfirmationCodeResult.errors) {
      return NextResponse.json(
        { error: "Failed to create user confirmation code" },
        { status: 500 }
      );
    }

    const insertedUserConfirmationCode =
      insertUserConfirmationCodeResult.data
        ?.insert_kilometer_tracker_user_confirmation_code_one?.code;
    if (!insertedUserConfirmationCode) {
      return NextResponse.json(
        { error: "Failed to create user confirmation code" },
        { status: 500 }
      );
    }

    const insertGroupUserResult = await apolloClient.mutate<
      InsertGroupUserMutation,
      InsertGroupUserMutationVariables
    >({
      mutation: InsertGroupUserDocument,
      variables: { email: input.arg1.email },
    });

    if (insertGroupUserResult.errors) {
      return NextResponse.json(
        { error: "Failed to insert group user" },
        { status: 500 }
      );
    }

    const insertedGroupUser =
      insertGroupUserResult.data?.insert_kilometer_tracker_group_user_one;
    if (!insertedGroupUser) {
      return NextResponse.json(
        { error: "Failed to insert group user" },
        { status: 500 }
      );
    }

    return NextResponse.json({ email: insertedUser.email, group: insertedGroupUser.group, role: insertedGroupUser.role }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error inserting user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
