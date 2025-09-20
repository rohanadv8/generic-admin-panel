"use client";
// MODULES //
import React, { useEffect, useRef } from "react";
// COMPONENTS //
import NavbarLink from "@/components/NavbarLink";
// import DropDown from "@/components/DropDown";
// ICONS //
import {
  faCartShopping,
  faRightFromBracket,
  faUserPen,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const navbarItems: Array<{ text: string; navicon: IconProp; path: string }> = [
  {
    text: "Inventory List",
    navicon: faWarehouse,
    path: "/inventory-list",
  },
  {
    text: "Customer List",
    navicon: faUsers,
    path: "/customer-list",
  },
  {
    text: "User Permission",
    navicon: faUserPen,
    path: "/user-permission",
  },
  {
    text: "Order List",
    navicon: faCartShopping,
    path: "/order-list",
  },
];
interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Navbar({ isOpen, onClose }: NavbarProps) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const handleLogout = () => {
    sessionStorage.clear();
  };
  // add addEventListener to close navbar component  if we click outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={navbarRef}
      className={`fixed top-0 left-0 h-screen mt-20 px-1 border-r-4 border-primary-200 bg-primary-600 transition-transform transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: "240px" }}
    >
      <div className="m-2 overflow-y-auto h-full">
        <ol className="my-3">
          {navbarItems.map((item, index) => (
            <li key={index} className="">
              <NavbarLink
                buttonIconClass="iconButton"
                path={item.path}
                text={item.text}
                navicon={item.navicon}
              />
            </li>
          ))}
          {/* <DropDown /> */}
          <li className="">
            <div onClick={handleLogout}>
              <NavbarLink
                buttonIconClass="iconButton"
                path={"/"}
                text={"Logout"}
                navicon={faRightFromBracket}
              />
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
