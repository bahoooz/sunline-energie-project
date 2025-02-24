import Image from "next/image";
import React from "react";

export default function HeaderBlog() {
  return (
    <div>
      <div className="lg:flex lg:h-[500px]">
        <Image
          src={"/assets/img-blog.png"}
          width={1468}
          height={1049}
          alt="image blog"
          className="h-40 sm:h-60 md:w-full lg:h-full lg:max-w-[40%] object-cover object-center md:object-left"
        />
        <div className="bg-[#425A9E] text-white text-center px-7 lg:px-16 2xl:px-44 py-12 flex flex-col gap-8 sm:gap-10 lg:justify-center lg:text-start lg:w-full">
          <h1 className="text-2xl font-bold lg:text-3xl">
          Restez connectés aux nouvelles technologies
          </h1>
          <p>
          Nos experts vous donne les dernières news dans le monde du photovoltaïques, 
          soyer informés de chaque nouvelles avancées dans le monde solaire.
          </p>
        </div>
      </div>
    </div>
  );
}
