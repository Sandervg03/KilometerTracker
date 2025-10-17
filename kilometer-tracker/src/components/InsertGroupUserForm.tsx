'use client';

import { useState } from 'react';
import { useInsertGroupUserActionMutation } from '@/generated/graphql';

interface InsertGroupUserFormProps {
  groupId: string;
}

export default function InsertGroupUserForm({ groupId }: InsertGroupUserFormProps) {
  const [email, setEmail] = useState('');
  const [insertGroupUser, { loading, error }] = useInsertGroupUserActionMutation();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);

    try {
      const result = await insertGroupUser({
        variables: {
          arg1: {
            email,
            group: groupId,
          },
        },
      });

      if (result.data?.InsertGroupUser) {
        const { email: userEmail, group: userGroup, role } = result.data.InsertGroupUser;
        setSuccessMessage(`User ${userEmail} added to group ${userGroup} with role ${role}`);
        setEmail('');
      }
    } catch (err) {
      console.error('Error inserting group user:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="user@example.com"
            disabled={loading}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Error: {error.message}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            {successMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Adding User..." : "Add User to Group"}
        </button>
      </form>
    </div>
  );
}
