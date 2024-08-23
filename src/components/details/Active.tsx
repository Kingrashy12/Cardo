import React from "react";
import Typography from "../Text/Typography";

const Active = () => {
  return (
    <div className="flex gap-3 items-center px-3 justify-between max-[550px]:px-5">
      <div className="flex flex-col">
        <Typography className="text-typoColor text-sm">Active users</Typography>
        <Typography className="text-typoColor font-bold text-base">
          5000+
        </Typography>
      </div>
      <div className="h-full w-[1px] bg-neutral-300" />
      <div className="flex flex-col">
        <Typography className="text-typoColor text-sm">Downloads</Typography>
        <Typography className="text-typoColor font-bold text-base">
          30.3k
        </Typography>
      </div>
      <div className="h-full w-[1px] bg-neutral-300" />
      <div className="flex flex-col">
        <Typography className="text-typoColor text-sm">Reviews</Typography>
        <Typography className="text-typoColor font-bold text-base">
          1200+
        </Typography>
      </div>
    </div>
  );
};

export default Active;
