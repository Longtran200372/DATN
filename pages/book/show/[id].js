import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Index from "layouts/Index.js"

export default function BookDetail()  {
  const param = useParams();
  const router = useRouter();
  const {id} = router.query;
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:2224/api/book/getBook/${id}`)
      .then((response) => response.json())
      .then((json) => setBook(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const bookData = book[0]
  console.log(id)
  return (

    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Book Image */}
        <div className="flex-shrink-0 w-32">
          <img
            src={bookData.imageUrl}
            alt={bookData.name}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1 pl-7">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{bookData.name}</h1>
          <h2 className="text-lg text-gray-600 mb-2">By {bookData.author}</h2>
          <p className="text-sm text-gray-500 mb-4">NXB {bookData.publisher}</p>

          <p className="text-gray-700 mb-6">{bookData.description}</p>

          <div className="mb-6">
            <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-md">
              {bookData.genre}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-500 text-lg font-semibold">★ {bookData.rating}</span>
            <span className="text-gray-500 text-sm">({Math.round(bookData.rating * 20)}%)</span>
          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Add to My Library
          </button>
        </div>
      </div>
    </div>
  );
};

BookDetail.layout = Index
