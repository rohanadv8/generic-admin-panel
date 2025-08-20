// MODULES //
import React from "react";
import Link from "next/link";
// ICON //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
// DTO //
import { NavbarLinkProps } from "@/client/dto/component.dto";

export default function NavbarLink({
  buttonIconClass,
  path,
  text,
  navicon,
}: NavbarLinkProps) {
  // const [activeIndex, setActiveIndex] = useState<string>("");
  const buttonClass = {
    iconButton:
      "focus:border-red-600  transition ease-in-out hover:text-secondary-900 text-secondary-900 hover:bg-primary-200 hover:shadow-lg focus:outline-none",
  }[buttonIconClass];

  return (
    <Link href={path}>
      <button
        className={`${buttonClass}  rounded-sm pl-2 text-xs py-2 my-1.5 w-full text-left`}
      >
        <span className=" ">
          {navicon && (
            <FontAwesomeIcon icon={navicon} size="sm" className="  " />
          )}
          <span className="pt-0 pl-3 ">{text}</span>
        </span>
      </button>
    </Link>
  );
}
