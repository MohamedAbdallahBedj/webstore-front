import Link from "next/link";
import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
const Boxes = () => {
  return (
    <div className="py-16 mx-4 md:mx-8 lg:max-w-7xl lg:mx-auto flex justify-center items-center flex-wrap gap-4">
      <div className="bg-blue-50 max-w-[300px] min-h-[300px] py-12 px-7 rounded-lg">
        <FaFingerprint className="mb-8 text-5xl text-gray-600 hover:scale-105" />
        <h4>
          <Link className="font-bold text-blue-700" href="">Lorem Ipsum</Link>
        </h4>
        <p className="text-sm mt-4 text-gray-600">
          Voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi
        </p>
      </div>
      <div className="bg-blue-50 max-w-[300px] min-h-[300px] py-12 px-7 rounded-lg">
        <FaShippingFast className="mb-8 text-5xl text-gray-600 hover:scale-105" />
        <h4>
          <Link className="font-bold text-blue-700" href="">Sed ut perspiciatis</Link>
        </h4>
        <p className="text-sm mt-4 text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
      </div>
      <div className="bg-blue-50 max-w-[300px] min-h-[300px] py-12 px-7 rounded-lg">
        <FaDollarSign className="mb-8 text-5xl text-gray-600 hover:scale-105" />
        <h4>
          <Link className="font-bold text-blue-700" href="">Magni Dolores</Link>
        </h4>
        <p className="text-sm mt-4 text-gray-600">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia
        </p>
      </div>
      <div className="bg-blue-50 max-w-[300px] min-h-[300px] py-12 px-7 rounded-lg">
        <GoGoal className="mb-8 text-5xl text-gray-600 hover:scale-105" />
        <h4>
          <Link className="font-bold text-blue-700" href="">Nemo Enim</Link>
        </h4>
        <p className="text-sm mt-4 text-gray-600">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis
        </p>
      </div>
    </div>
  );
};

export default Boxes;
