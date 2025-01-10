import React from "react";
import { createPopper } from "@popperjs/core";

export default function TableDropdown({data}) {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleDelete = async (data) => {
    try {
        console.log(data)
        const response = await fetch(`http://localhost:2224/api/book/delete/${data._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            alert('Item deleted successfully');
            window.location.reload();
        } else {
            alert('Failed to delete item');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error deleting item');
    }
  }


  
  const handleUpdate = async (data) => {
    const id = data._id
    window.location.href = `/admin/book/updateBook/${id}`
    // const response = await fetch(``)
    // function UpdateFormBook(data) {

    // }


  }
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={async () => {
            await handleDelete(data)
          }}
        >
          Xóa
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={async () => {
            await handleUpdate(data)
          }}
        >
          Sửa
        </a>
      </div>
    </>
  );
};


