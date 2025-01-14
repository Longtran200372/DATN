import React from "react";

// components

import UserTable from "components/Cards/UserTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4 mt-11">
          <UserTable color="dark" />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;
