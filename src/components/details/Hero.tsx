import { ArrowLong, Stars, ThreeStars } from "@/asset/images";
import Image from "next/image";
import React from "react";
import Typography from "../Text/Typography";
import Button from "../Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex-col gap-7 px-3 flex mt-1 max-[768px]:px-5">
      <Image
        src={Stars}
        alt="Stars"
        className="w-[50px] self-end hidden max-[550px]:flex relative z-50"
      />
      <Typography
        className="text-[50px] font-normal max-[550px]:text-5xl"
        fontJakarta
      >
        All the <span className="font-medium underline">experience</span> in the
        new credit card
      </Typography>
      <motion.div whileTap={{ x: 100 }}>
        <Image src={ArrowLong} alt="Arrow" className="cursor-pointer" />
      </motion.div>
      <Typography className="text-[16px] w-[450px] max-[550px]:w-full">
        Simple transfers, payments for utilities, functional statemement, card
        settings, for which you used to have to go too the brach oonline-banking
      </Typography>
      <div className="flex gap-3">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button>Order card</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button variant="transparent" className="font-semibold">
            {" "}
            How it work
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
