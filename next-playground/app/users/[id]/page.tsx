import { notFound } from "next/navigation";
import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersPage = async ({ params: { id } }: { params: { id: number } }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  if (id > 10) notFound();

  return (
    <>
      <h1 className="text-black">Users</h1>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
