import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
  
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <div className="h-[400px] w-full" style={bgImage}></div>
  );
};

export default BannerPic;
