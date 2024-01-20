"use client";

import React from "react";
import Filter from "./Filter";
import { useSearchParams } from "next/navigation";

const Users = ({ users }: { users: User[] }) => {
  const searchParams = useSearchParams();
  const url = searchParams.get("SortBy") || "all";

  //   const [field, direction] = url.split("-");

  let sortedUsers;

  //   Sort by name
  if (url === "name-asc") {
    sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
  } else if (url === "name-desc") {
    sortedUsers = users.sort((a, b) => b.name.localeCompare(a.name));
  }
  //   Username
  else if (url === "username-asc") {
    sortedUsers = users.sort((a, b) => a.username.localeCompare(b.username));
  } else if (url === "username-desc") {
    sortedUsers = users.sort((a, b) => b.username.localeCompare(a.username));
  }
  //   Street
  else if (url === "street-asc") {
    sortedUsers = users.sort((a, b) =>
      a.address.street.localeCompare(b.address.street)
    );
  } else if (url === "street-desc") {
    sortedUsers = users.sort((a, b) =>
      b.address.street.localeCompare(a.address.street)
    );
  } else {
    sortedUsers = users;
  }

  return (
    <div className="overflow-auto p-5 text-left">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl underline">Users</h1>
        <Filter />
      </div>

      <table className="border border-stone-400 rounded-lg mt-5 p-3 w-[70rem]">
        <thead className="bg-stone-400 h-12">
          <tr className="text-left space-x-10 text-gray-800">
            <th className="pr-8 pl-3">Name</th>
            <th className="pr-8 pl-3">Username</th>
            <th className="pr-8 pl-3">Email</th>
            <th className="pr-8 pl-3">Street</th>
            <th className="pl-3">Phone</th>
          </tr>
        </thead>

        <tbody className="text-start">
          {sortedUsers?.map((user) => (
            <tr key={user.id} className="border border-stone-400 h-12">
              <td className="pr-8 pl-3 text-gray-800 font-semibold">
                {user.name}
              </td>
              <td className="pr-8 pl-3 text-gray-800">{user.username}</td>
              <td className="pr-8 pl-3 text-sm text-stone-600">{user.email}</td>
              <td className="pr-8 pl-3 text-gray-800">{user.address.street}</td>
              <td className="pl-3 text-sm text-stone-600">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
