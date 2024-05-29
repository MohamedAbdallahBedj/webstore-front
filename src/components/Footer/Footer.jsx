import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillPhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container grid grid-cols-1 mx-auto">
        <div className="col-span-1 space-y-4">
          <img alt="logo" src="/logo.png" className=" max-w-24" />
          <div className="mr-2">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              hic?
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <AiFillFacebook />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <AiFillInstagram />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <AiFillTwitterCircle />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <AiFillPhone />
            </Link>
          </div>
        </div>
        <div className="my-4 col-span-2 grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </Link>
                {/* <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</Link> */}
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </Link>
                {/* <Link to="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</Link> */}
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </Link>
                <Link
                  to="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
