import React, { useState } from "react";

const User = ({ name, address, contact }) => {
  const [post] = useState(25);
  const [impressions] = useState(1000);
  return (
    <div className="flex flex-col bg-neutral-100 p-4 m-2 rounded-md w-72">
      <h1 className="font-bold">Name: {name}</h1>
      <h1 className="font-semibold">Posts: {post}</h1>
      <h1 className="font-semibold">Impressions: {impressions}</h1>
      <h2 className="font-semibold">Address: {address}</h2>
      <h4 className="font-semibold">Contact: {contact}</h4>
    </div>
  );
};

export default User;
