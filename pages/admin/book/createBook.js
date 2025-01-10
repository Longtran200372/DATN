import React from "react";

// components

// layout for page

import Admin from "layouts/Admin.js";
import CreateFormBook from "components/Cards/CreateFormBook.js";

export default function createBook() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CreateFormBook />
        </div>
      </div>
    </>
  );
}

createBook.layout = Admin;
