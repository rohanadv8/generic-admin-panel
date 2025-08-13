// // MODULES //
// import React from "react";
// import Link from "next/link";
// // ICON //
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// // DTO //
// import { NavbarLinkProps } from "@/client/dto/component.dto";

// export default function NavbarLink({
//   buttonIconClass,
//   path,
//   text,
//   navicon,
// }: NavbarLinkProps) {
//   // const [activeIndex, setActiveIndex] = useState<string>("");
//   const buttonClass = {
//     iconButton:
//       "focus:border-red-600   text-slate-50 transition ease-in-out hover:text-black hover:bg-red-700 hover:shadow-lg focus:outline-none",
//   }[buttonIconClass];

//   return (
//     <Link href={path} legacyBehavior>
//       <button
//         className={`${buttonClass}  rounded-sm pl-2 text-xs py-2 my-1.5 w-full text-left`}
//       >
//         <span className=" ">
//           {navicon && (
//             <FontAwesomeIcon icon={navicon} size="sm" className="text-white" />
//           )}
//           <span className="pt-0 pl-3">{text}</span>
//         </span>
//       </button>
//     </Link>
//   );
// }
