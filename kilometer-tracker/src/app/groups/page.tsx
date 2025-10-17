'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryUserGroupsQuery, QueryUserGroupsQuery } from '@/generated/graphql';
import InsertGroupUserForm from '@/components/InsertGroupUserForm';

export default function GroupsPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Extract email from token (assuming it's stored in the token)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUserEmail(payload.email);
    } catch (error) {
      console.error('Error parsing token:', error);
      router.push('/login');
    }
  }, [router]);

  const { data, loading, error } = useQueryUserGroupsQuery({
    variables: { email: userEmail || '' },
    skip: !userEmail,
  });

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      localStorage.removeItem('auth-token');
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!userEmail) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Kilometer Tracker - Groups</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/home')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Groups</h2>

          {loading && (
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Loading groups...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              Error loading groups: {error.message}
            </div>
          )}

          {data?.kilometer_tracker_group_user && (
            <div className="space-y-6">
              {data.kilometer_tracker_group_user.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600">You are not a member of any groups yet.</p>
                </div>
              ) : (
                data.kilometer_tracker_group_user.map((groupUser: QueryUserGroupsQuery['kilometer_tracker_group_user'][0]) => (
                  <div key={groupUser.group} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {groupUser.group_rel.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Role: <span className="font-medium">{groupUser.role}</span>
                        </p>
                      </div>
                    </div>

                    {groupUser.role === 'ADMIN' && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Add User to Group</h4>
                        <InsertGroupUserForm groupId={groupUser.group} />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
