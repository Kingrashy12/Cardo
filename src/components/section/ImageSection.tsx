import React from "react";
import Button from "../Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { Credit_Card, Hand, Stars } from "@/asset/images";
import { motion } from "framer-motion";

const ImageSection = () => {
  return (
    <div className="image-section bg-imageSection relative w-[60%] flex flex-col p-6 max-[820px]:hidden">
      <div className="flex items-center gap-5 px-5 py-2 mb-8 self-end">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button>Open account</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button variant="secondary" icon={<MdKeyboardArrowRight size={20} />}>
            Sign in
          </Button>
        </motion.div>
      </div>
      <div className="flex flex-col gap-2 mt- p-5 items-center justify-center">
        <Image
          src={Stars}
          alt="Stars"
          className="w-[35px] -translate-x-20 relative z-50"
        />

        <Image
          src={Credit_Card}
          alt="Stars"
          className="relative w-[280px] z-50"
        />
      </div>
      <Image
        alt="Hand"
        src={Hand}
        className="-z- w-[250px] absolute justify-center flex items-center right-14 bottom-0"
      />
    </div>
  );
};

export default ImageSection;
