import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className=" bg-headerBackground p-4  flex justify-between">
      <Image
        src="/icons/franck-muller.png"
        alt="Franck Muller Logo"
        width={200}
        height={100}
      />
      <div className="w-20">
        <ThemeToggle isRightMenu={true} />
      </div>
    </div>
  );
}
