import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  toggleSidebar: () => void;
  isSlideOpen: boolean;
}
export default function Header({ toggleSidebar, isSlideOpen }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-headerBackground p-5 flex justify-between z-50">
      <div className="flex ">
        {isSlideOpen ? (
          <div className=" items-center   text-white py-2 mr-6 z-10 cursor-pointer">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        ) : (
          <button
            className=" items-center   text-white py-2 mr-6"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        <Image
          src="/icons/franck-muller.png"
          alt="Franck Muller Logo"
          width={200}
          height={100}
        />
      </div>

      <div className="w-20">
        <ThemeToggle isRightMenu={true} />
      </div>
    </div>
  );
}
