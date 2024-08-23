import React from "react";
import { IoClose } from "react-icons/io5";
import Typography from "./Text/Typography";

const MenuNav: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  return (
    <div className="fixed bg-transparentBlack w-full inset-0 z-50">
      <div className="flex flex-col bg-typoColor py-5 px-8 fixed left-0 h-full w-[250px]">
        <IoClose
          size={28}
          color="white"
          className="self-end"
          onClick={closeMenu}
        />
        <div className="flex flex-col gap-6 relative p-2 mt-5 text-secondary">
          <Typography className="font-medium text-base cursor-pointer hover:opacity-80">
            Deposit
          </Typography>
          <Typography className="font-medium text-base cursor-pointer hover:opacity-80">
            Dashboard
          </Typography>
          <Typography className="font-medium text-base cursor-pointer hover:opacity-80">
            Company
          </Typography>
          <Typography className="font-medium text-base cursor-pointer hover:opacity-80">
            Pricing
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
