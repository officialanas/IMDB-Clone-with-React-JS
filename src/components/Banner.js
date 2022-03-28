import React from "react"
import Image from "../Image/banner.jpg"
function Banner() {
  return (
    <>
      <div
        className={`bg-[url(${Image})] h-[40vh] md:h-[60vh] 
        bg-center bg-cover
        flex items-end  
    `}
      >
        <div
          className=" text-3xl md:text-5xl text-white
            p-6 
            bg-gray-900 bg-opacity-50
            w-full
            flex justify-center
        "
        >
          Spider-Man : No Way Home
        </div>
      </div>
    </>
  )
}

export default Banner
