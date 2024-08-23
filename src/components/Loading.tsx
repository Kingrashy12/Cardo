import { CardoStar } from "@/asset/images";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full fixed items-center justify-center inset-0 bg-transparentBlack flex z-[500]">
      <div className="flex items-center justify-center relative">
        <div className="absolute h-[200px] w-[200px] -z-10 rounded-full spinner p-6" />
        <Image
          src={CardoStar}
          alt="Cardo"
          className="w-[150px] cardo-image h-[100px]"
        />
      </div>
    </div>
  );
};

export default Loading;
