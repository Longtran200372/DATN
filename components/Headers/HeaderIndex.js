import React from "react";
import Logo from "public/img/Logo.jpg";
import BooksSlider from "components/Slider/BookSlider";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="logo">
            <a href="/">
              <img
                src="https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg?w=740"
                alt="Logo"
                className="h-24"
              />
            </a>
          </div>

          <div className="lg:w-4/12">
            <nav className="header__nav ">
              <ul className="flex space-x-6 text-gray-900 justify-between text-2xl">
                <div>
                  <li>
                    <a href="/" className="hover:text-blue-500 lg:w-4/12">
                      Trang chủ
                    </a>
                  </li>
                </div>
                <div>
                  <li>
                    <a
                      href="/my-library"
                      className="hover:text-blue-500 lg:w-4/12"
                    >
                      Tủ sách của tôi
                    </a>
                  </li>
                </div>
                <div>
                  <li className="relative group ">
                    <span className="cursor-pointer hover:text-blue-500">
                      Thể loại
                    </span>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 text-sm">
                      <li>
                        <a
                          href="/genre/fiction"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Fiction
                        </a>
                      </li>
                      <li>
                        <a
                          href="/genre/non-fiction"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Non-Fiction
                        </a>
                      </li>
                      <li>
                        <a
                          href="/genre/scifi"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Sci-Fi
                        </a>
                      </li>
                      <li>
                        <a
                          href="/genre/fantasy"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Fantasy
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
              </ul>
            </nav>
          </div>

          <div className="search-bar flex items-center">
            <input
              type="text"
              placeholder="Từ khóa tìm kiếm..."
              className="border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-black rounded-r-md px-4 hover:bg-blue-600">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="header__user-dropdown relative group">
            <img
              src="/path-to-user-icon/user-icon.png"
              alt="User"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 text-sm right-0">
              <li>
                <a
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Thông tin cá nhân
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Cài đặt
                </a>
              </li>
              <li>
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                  Đăng xuất
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
