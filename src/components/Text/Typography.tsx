import React from "react";

const Typography: React.FC<TextType> = ({
  className,
  children,
  styles,
  fontJakarta = true,
  fontPlay,
  fontGaramond,
}) => {
  return (
    <p
      style={styles}
      className={`${className} ${fontPlay && "font-play"} ${
        fontJakarta && "font-jakarta"
      } ${fontGaramond && "font-garamond"}`}
    >
      {children}
    </p>
  );
};

export default Typography;
