import React from "react";

// components

import BookTable from "components/Cards/BookTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4 mt-11">
          <BookTable color="dark" />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;
