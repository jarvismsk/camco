import React from "react";

const all3 = () => {
  return (
    <div>
      <BrandSelect />
    </div>
  )
}

const BrandSelect = () => {
  return (
    <div className="bg-white border-4 border-blue-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span>Sell your Camera </span>
          <img src="/icamera.svg" alt="Camera Icon" className="inline-block w-12 h-13" />
          <span> now </span>
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap max-w-screen-lg">
            <div className="w-1/2 md:w-1/3 p-2">
              <img src="https://logos-world.net/wp-content/uploads/2020/08/Canon-Logo.png" className="w-full h-40 object-contain border-2 border-black my-1 p-2" />
            </div>
            <div className="w-1/2 md:w-1/3 p-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1280px-Sony_logo.svg.png" className="w-full h-40 object-contain border-2 border-black my-1 p-2" />
            </div>
            <div className="w-1/2 md:w-1/3 p-2">
              <img src="https://www.pngmart.com/files/22/Nikon-Logo-PNG.png" className="w-full h-40 object-contain border-2 border-black my-1 p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default all3;
