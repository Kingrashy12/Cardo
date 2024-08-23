import React from "react";

const getVariantStyle = (variant: ButtonType["variant"]) => {
  switch (variant) {
    case "primary":
      return "bg-black text-white border-none outline-none";
    case "secondary":
      return "bg-white border-none outline-none text-black";
    case "transparent":
      return "bg-transparent text-black border-none outline-none";
  }
};

const Button: React.FC<ButtonType> = ({
  children,
  className,
  styles,
  variant = "primary",
  onClick,
  icon,
}) => {
  return (
    <button
      style={styles}
      onClick={onClick}
      className={`${className} rounded-full font-medium text-xs p-3 font-play hover:opacity-75 cursor-pointer flex items-center justify-center gap-1 ${getVariantStyle(
        variant
      )}`}
    >
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;
