import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BooksSlider = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:2224/api/book/getbook")
      .then((response) => response.json())
      .then((json) => setBooks(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
    >
      ◀
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
    >
      ▶
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-8/12 m-auto">
      <Slider {...sliderSettings}>
        {books.map((book) => (
            <div className="shadow-md rounded-lg">
              <div className="flex justify-center items-center bg-gray-500 h-" >
                  <img style ={{height: "300px", width: "auto"}} src={book.imageUrl} lt={book.name} className=""
                  />
              </div>
              <a>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {book.name}
                  </h3>
                </div>
              </a>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default BooksSlider;
