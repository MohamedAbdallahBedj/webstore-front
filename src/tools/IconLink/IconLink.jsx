import React from "react";

const IconLink = ({ icon, link, label }) => {
  return (
    <a href={link} className="flex justify-start items-center gap-2 hover:text-blue-500">
      {icon()}
      <p className="text-sm">{label}</p>
    </a>
  );
};

export default IconLink;
