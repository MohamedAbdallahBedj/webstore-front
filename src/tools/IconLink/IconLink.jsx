import React from "react";
import { Link } from "react-router-dom";

const IconLink = ({ icon, link, label }) => {
  return (
    <Link to={link} className="flex justify-start items-center gap-2 hover:text-blue-500">
      {icon()}
      <p className="text-sm">{label}</p>
    </Link>
  );
};

export default IconLink;
