"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const menuItems = [
//   {
//     label: "Bookmaker List",
//     submenu: [
//       {
//         label: "Bookmaker",
//         path: "/bookmaker-new",
//       },
//       {
//         label: "Add Sport",
//         path: "/add-new",
//       },
//     ],
//   },
//   {
//     label: "Fancy List",
//     submenu: [
//       {
//         label: "Fancy",
//         path: "/fancy-new",
//       },
//       {
//         label: "Add Sport",
//         path: "/add-new",
//       },
//     ],
//   },
// ];
const menuItemsNoDropdown = [
  { label: "User List", path: "/user-list" },
  { label: "Fetch Event", path: "/fetch-event" },
  { label: "Result Log", path: "/result-log" },
  { label: "Market", path: "/market" },
];

export default function SideBar({ isOpen }: { isOpen: boolean }) {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<string>("");

  // const toggleDropdown = (index: number) => {
  //   setSelectedIndex(index);
  // };
  const handleClick = (label: string) => {
    setActiveIndex(label);
  };

  return (
    <div
      className={` absolute left-0 h-screen bg-primarydarkest top-20 transition-transform duration-500 ease-in-out transform 
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      style={{ width: "250px" }}
    >
      <ul>
        {menuItemsNoDropdown.map((item, index) => (
          <li
            key={`no-dropdown-${index}`}
            onClick={() => handleClick(item.label)}
            className={`text-sm text-white hover:bg-hoversidebar cursor-pointer ${
              activeIndex === item.label ? "bg-activesidebar" : ""
            }`}
          >
            <Link href={item.path}>
              <button className="text-white text-left pl-4 w-full py-3 rounded">
                {item.label}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
