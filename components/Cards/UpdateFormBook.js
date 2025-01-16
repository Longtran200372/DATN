import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// components

export default function UpdateFormBook(bookId) {
  const [data, setData] = useState({});  
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (Event) => {
    const name = Event.target.name;
    const value = Event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    fetch(`http://localhost:2224/api/book/getBook/${bookId.bookId}`)
      .then((response) => response.json())
      .then((json) => setData(json[0]))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    try {
      console.log(data);
      const response = await fetch(
        `http://localhost:2224/api/book/update/${data._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = response.json();
      if (response.ok) {
        alert("Chỉnh sửa thông tin sách thành công");
        // window.location.href="/admin/book"
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
      alert("Chỉnh sửa thông tin sách không thành công" + error);
    }
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 mt-20">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Chỉnh sửa sách
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
                    Tên sách
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Tác giả
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="author"
                    value={data.author}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Ngôn ngữ
                  </label>
                  <input
                    type="text"
                    name="language"
                    value={data.language || ""}
                    onChange={handleChange}
                    defaultValue={data.language}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Nhà xuất bản
                  </label>
                  <input
                    type="text"
                    name="publisher"
                    value={data.publisher || ""}
                    onChange={handleChange}
                    defaultValue={data.publisher}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Ngày xuất bản
                  </label>
                  <input
                    type="date"
                    name="publicationDate"
                    value={data.publicationDate || ""}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Số trang
                  </label>
                  <input
                    type="number"
                    name="pages"
                    value={data.pages || ""}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Kích cỡ
                  </label>
                  <input
                    type="text"
                    name="size"
                    value={data.size || ""}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Thông tin về sách
                  </label>
                  <Editor
                    apiKey="lm7il6unnjnaiuocplhwzhjxgmtc7imziryl44utj77lx78o"
                    onEditorChange={(editedValue) => {
                      console.log(editedValue);
                      setData({ ...data, description: editedValue });
                    }}
                    value={data.description}
                    init={{
                      plugins: [
                        // Core editing features
                        "anchor",
                        "autolink",
                        "charmap",
                        "codesample",
                        "emoticons",
                        "image",
                        "link",
                        "lists",
                        "media",
                        "searchreplace",
                        "table",
                        "visualblocks",
                        "wordcount",
                        // Your account includes a free trial of TinyMCE premium features
                        // Try the most popular premium features until Jan 28, 2025:
                        "checklist",
                        "mediaembed",
                        "casechange",
                        "export",
                        "formatpainter",
                        "pageembed",
                        "a11ychecker",
                        "tinymcespellchecker",
                        "permanentpen",
                        "powerpaste",
                        "advtable",
                        "advcode",
                        "editimage",
                        "advtemplate",
                        "ai",
                        "mentions",
                        "tinycomments",
                        "tableofcontents",
                        "footnotes",
                        "mergetags",
                        "autocorrect",
                        "typography",
                        "inlinecss",
                        "markdown",
                        "importword",
                        "exportword",
                        "exportpdf",
                      ],
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                      tinycomments_mode: "embedded",
                      tinycomments_author: "Author name",
                      mergetags_list: [
                        { value: "First.Name", title: "First Name" },
                        { value: "Email", title: "Email" },
                      ],
                      ai_request: (request, respondWith) =>
                        respondWith.string(() =>
                          Promise.reject("See docs to implement AI Assistant")
                        ),
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <button
                  className=" bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Xác nhận
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
          {/* {message && <p className="message">{message}</p>}
          {error && <p className="error">{error}</p>} */}
        </div>
      </div>
    </>
  );
}
