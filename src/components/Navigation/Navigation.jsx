import React from "react";

const links = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Navigate",
  },
  {
    parent: true,
    label: "Categories",
    children: [
      {
        href: "#",
        label: "Sub Page",
      },
      {
        href: "#",
        label: "Sub Page",
      },
    ],
  },
  {
    href: "#",
    label: "Products",
  },
  {
    href: "#",
    label: "About Us",
  },
  {
    href: "#",
    label: "Contacts",
  },
];

const Navigation = () => {
  return (
    <nav className="px-8 py-4 w-full hidden md:flex md:justify-between">
      <ul className="flex items-center text-sm text-gray-600 gap-4 mx-auto lg:gap-12 lg:text-lg">
        {links.map((link, index) =>
          link?.parent ? (
            <li className="relative parent" key={`Link ${index}`}>
              <p className="cursor-pointer hover:text-gray-900">{link.label}</p>
              <ul className="text-base py-2 flex flex-col bg-slate-50 text-gray-500 absolute top-7 child transition-all ease-in-out duration-300 z-10">
                {link.children.map((subLink, subIndex) => (
                  <li
                    key={`Sublink ${index}/${subIndex}`}
                    className="py-2 px-4 cursor-pointer normal-case whitespace-nowrap hover:bg-gray-200"
                  >
                    <a href={subLink.href}>{subLink.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={`Link ${index}`}>
              <a {...link} className="hover:text-gray-900">
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
