'use client'
import React from "react";

// components

import BookTable from "components/Cards/BookTable.js";
import {useRouter} from "next/router"

// layout for page
import Admin from "layouts/Admin.js";
import CreateFormBook from "components/Cards/CreateFormBook";
import { UpdateModeEnum } from "chart.js";
import UpdateFormUser from "components/Cards/UpdateFormUser";
import { useParams } from "next/navigation";


export default function UpdateUser() {

  const router = useRouter()
  const param = useParams()

  const {id} = router.query;
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4 mt-11">
          <UpdateFormUser userId={id}/>
        </div>
      </div>
    </>
  );
}

UpdateUser.layout = Admin;
