import React from "react";
import Navbar from "../details/Navbar";
import Hero from "../details/Hero";
import Active from "../details/Active";
import Image from "next/image";
import { Cardo_Card } from "@/asset/images";

const Details = () => {
  return (
    <div className="flex flex-col relative py-9 gap-8 px-16 max-[550px]:p-5 w-full">
      <Navbar />
      <Hero />
      <Active />
      <div className="hidden max-[550px]:flex py-3 px-5">
        <Image alt="credit_cards" src={Cardo_Card} />
      </div>
    </div>
  );
};

export default Details;
