import React, { Suspense } from "react";
import Link from "next/link";
import { sort } from "fast-sort";

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersPage = async ({
  searchParams: { sortOrder },
}: {
  searchParams: { sortOrder: string };
}) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const sortedUsers: User[] = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <h1 className="text-black">Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  <Link href="/users?sortOrder=name">Name</Link>
                </th>
                <th>
                  <Link href="/users?sortOrder=email">Email</Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user) => (
                <tr className="text-black" key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>
    </>
  );
};

export default UsersPage;
