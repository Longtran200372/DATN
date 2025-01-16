'use client'
import React from "react";

// components

// layout for page

import Admin from "layouts/Admin.js";
import CreateFormUser from "components/Cards/CreateFormUser";

export default function createUser() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CreateFormUser />
        </div>
      </div>
    </>
  );
}

createUser.layout = Admin;
