'use client'
import React from "react";

// components

import BookTable from "components/Cards/BookTable.js";
import {useRouter} from "next/router"

// layout for page
import Admin from "layouts/Admin.js";
import CreateFormBook from "components/Cards/CreateFormBook";
import { UpdateModeEnum } from "chart.js";
import UpdateFormBook from "components/Cards/UpdateFormBook";
import { useParams } from "next/navigation";


export default function UpdateBook() {

  const router = useRouter()
  const param = useParams()

  const {id} = router.query;
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4 mt-11">
          <UpdateFormBook bookId={id}/>
        </div>
      </div>
    </>
  );
}

UpdateBook.layout = Admin;
