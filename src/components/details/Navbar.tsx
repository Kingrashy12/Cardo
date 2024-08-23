import { JamMenu, Logo } from "@/asset/images";
import Image from "next/image";
import React, { useState } from "react";
import Typography from "../Text/Typography";
import { RiMenu4Line } from "react-icons/ri";
import MenuNav from "../MenuNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <Image alt="Logo" src={Logo} className="w-[100px]" />
      <div className="flex items-center gap-7 max-[550px]:hidden">
        <Typography className="font-medium text-sm cursor-pointer hover:opacity-80">
          Deposit
        </Typography>
        <Typography className="font-medium text-sm cursor-pointer hover:opacity-80">
          Dashboard
        </Typography>
        <Typography className="font-medium text-sm cursor-pointer hover:opacity-80">
          Company
        </Typography>
        <Typography className="font-medium text-sm cursor-pointer hover:opacity-80">
          Pricing
        </Typography>
      </div>
      <div className="flex-col gap-1 cursor-pointer hidden max-[550px]:flex">
        <RiMenu4Line size={25} onClick={() => setOpenMenu(true)} />
      </div>
      {openMenu && <MenuNav closeMenu={() => setOpenMenu(false)} />}
    </div>
  );
};

export default Navbar;
