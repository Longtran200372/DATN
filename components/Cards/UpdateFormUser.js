import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { data } from "autoprefixer";

// components

export default function UpdateFormUser(userId) {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleChange = (Event) => {
    const name = Event.target.name;
    const value = Event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

    useEffect(() => {
      fetch(`http://localhost:2224/api/user/getUserById/${userId.userId}`)
        .then((response) => response.json())
        .then((json) => setInputs(json[0]))
        .catch((err) => {
          console.log(err);
        });
    }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(userId.userId);
      const response = await fetch(`http://localhost:2224/api/user/update/${userId.userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message); // Hiển thị thông báo thành công
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong"); // Hiển thị lỗi từ API
        setMessage("");
      }
    } catch (err) {
      setError("An unexpected error occurred."); // Lỗi kết nối hoặc server
      setMessage("");
    }
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 mt-20">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Chỉnh sửa thông tin người dùng
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={inputs.address}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Họ và tên
                  </label>
                  <input
                    type="string"
                    name="fullName"
                    value={inputs.fullName}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ">
                    SĐT
                  </label>
                  <input
                    type="string"
                    name="phoneNumber"
                    value={inputs.phoneNumber}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full">
                <button
                  className=" bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Chỉnh sửa thông tin người dùng
                </button>
              </div>
            </div>

            {/* <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Thông tin về sách
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div> */}
          </form>
          {message && <p className="message">{message}</p>}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </>
  );
}
