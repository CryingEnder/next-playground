import React from "react";

const UsersPage = ({ params }: { params: { id: number } }) => {
  return <div className="text-black">UsersPage {params.id}</div>;
};

export default UsersPage;
