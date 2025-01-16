"use client"
import IndexNavbar from "components/Navbars/IndexNavbar"
import HeadersIndex from 'components/Headers/HeaderIndex'
import BooksSlider from "components/Slider/BookSlider"
export default function Index() {
  return (<>
    {/* <IndexNavbar/> */}
    <HeadersIndex/>
    <div className="text-5xl place-self-center py-8">
      Sách trending
    </div>
    <BooksSlider/>
    <div className="place-self-center py-10">
      <div className="text-5xl">Sách mới cập nhật</div>
      {/* <BooksSlider/> */}
    </div>
  </>

  )
}