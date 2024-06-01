import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaMapPin,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaYoutube,
  FaFax,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const linksList = [
  {
    href: "#",
    label: "Acceuil",
  },
  {
    href: "#",
    label: "Navigation",
  },
  {
    parent: true,
    label: "Catégories",
    children: [
      {
        href: "#",
        label: "Sous Page",
      },
      {
        href: "#",
        label: "Sous Page",
      },
    ],
  },
  {
    href: "#",
    label: "Produits",
  },
  {
    href: "#",
    label: "A Propos",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const NavigationResponsive = ({ lang = "ar", dictionary = {} }) => {
  const { address, links, contacts } = {};
  // const router = useRouter();
  const initialPosition =
    lang === "ar" ? "-translate-x-full" : "translate-x-full";
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => {
    setOpen((p) => !p);
  };
  const navigateTo = (url) => {
    // router.push(url);
    setOpen(false);
  };
  return (
    <div>
      <nav className="px-8 py-4 w-full text-gray-100 bg-blue-700 flex items-center justify-between md:hidden">
        <AiOutlineMenu
          className="text-3xl hover:text-gray-300"
          onClick={toggleOpen}
        />
        <aside
          className={`fixed p-4 inset-y-0 inset-x-0 z-10 overflow-y-auto transition-all ease-in-out duration-700 bg-blue-700 ${open ? "" : initialPosition
            }`}
        >
          <span className="flex justify-between">
            <div className="flex gap-2">
              <img alt="logo" src={"/logo.png"} className="w-24" />
            </div>
            <AiOutlineClose
              className=" text-xl hover:text-gray-300"
              onClick={toggleOpen}
            />
          </span>

          <ul className="my-4 py-4 divide-y divide-gray-400 flex flex-col uppercase text-lg font-medium">
            {linksList.map((link, index) =>
              link?.parent ? (
                <li className="py-3 relative parent" key={`Link ${index}`}>
                  <p className="cursor-pointer hover:text-gray-900">
                    {link.label}
                  </p>
                  <ul className="text-base py-2 flex flex-col bg-slate-50 text-gray-500 absolute top-7 child transition-all ease-in-out duration-300 z-10">
                    {link.children.map((subLink, subIndex) => (
                      <li
                        key={`Sublink ${index}/${subIndex}`}
                        className="py-2 px-4 cursor-pointer normal-case whitespace-nowrap hover:bg-gray-200"
                      >
                        <Link to={subLink.href}>{subLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="py-3" key={`Link ${index}`}>
                  <Link {...link} className="hover:text-gray-300">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <h1 className="text-2xl font-medium">{"Contacte Us"}</h1>
          <ul className="flex flex-col py-4 gap-2 text-md">
            <li className="flex items-center gap-4">
              <FaMapPin className="" />
              <Link>{address || ""}</Link>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="" />
              <Link dir="ltr">{contacts?.phone || ""}</Link>
            </li>
            <li className="flex items-center gap-4">
              <FaFax className="" />
              <Link dir="ltr">{contacts?.fax || ""}</Link>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope />
              <Link to={`mailto:${contacts?.email || ""}`}>
                {contacts?.email || ""}
              </Link>
            </li>
          </ul>
          <nav className="mt-4 flex items-center justify-center gap-4">
            <Link to={links?.facebook || ""} target="_blank">
              <FaFacebook size={24} className="" />
            </Link>
            <Link to={links?.youtube || ""} target="_blank">
              <FaYoutube size={24} className="" />
            </Link>
          </nav>
        </aside>
      </nav>
    </div>
  );
};

export default NavigationResponsive;
