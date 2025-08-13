// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { PaginationDto } from "../dto/component.dto";

// const PaginationComponent = ({
//   currentPage,
//   count,
//   limit,
//   handlePageChange,
//   handleItemsPerPage,
//   itemsPerPage,
// }: PaginationDto) => {
//   const totalPages = Math.ceil(count / limit);
//   const maxPagesToShow = 5;

//   const getVisiblePages = (totalPages: number, currentPage: number) => {
//     const pages = [];
//     const halfMax = Math.floor(maxPagesToShow / 2);

//     let startPage = Math.max(1, currentPage - halfMax);
//     let endPage = Math.min(totalPages, currentPage + halfMax);

//     if (endPage - startPage + 1 < maxPagesToShow) {
//       if (startPage === 1) {
//         endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
//       } else if (endPage === totalPages) {
//         startPage = Math.max(1, endPage - maxPagesToShow + 1);
//       }
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pages.push(i);
//     }

//     return pages;
//   };
//   const visiblePages = getVisiblePages(totalPages, currentPage);
//   if (count === 0) {
//     return <></>;
//   }
//   return (
//     <div className="flex justify-between mt-4 text-white">
//       <div className="">
//         <label htmlFor="itemsPerPage" className="text-white mr-2">
//           Limit:{" "}
//         </label>
//         <select
//           id="itemsPerPage"
//           value={itemsPerPage}
//           onChange={(e) => handleItemsPerPage(Number(e.target.value))}
//           className=" p-2 bg-gray-700 border border-gray-600 rounded cursor-pointer"
//         >
//           <option value={10}>10</option>
//           <option value={25}>25</option>
//           <option value={50}>50</option>
//           <option value={100}>100</option>
//         </select>
//       </div>
//       <div>
//         <button
//           className={`px-2 py-1 mx-1 ${
//             currentPage === 1
//               ? "hover:bg-sidebarParent cursor-not-allowed"
//               : "bg-sidebarParent"
//           }`}
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           {" "}
//           <FontAwesomeIcon className="text-white " icon={faChevronLeft} />
//         </button>

//         {currentPage > maxPagesToShow && (
//           <>
//             <button
//               className={`px-2 py-1 text-xs mx-1 ${
//                 currentPage === 1 ? "bg-green-600" : "bg-red-600"
//               }`}
//               onClick={() => handlePageChange(1)}
//             >
//               1
//             </button>
//             <span className="text-white">...</span>
//           </>
//         )}

//         {visiblePages.map((page) => (
//           <button
//             key={page}
//             className={`px-2 py-1 text-xs mx-1 ${
//               currentPage === page
//                 ? "bg-hoverPrimary bg-green-600"
//                 : "bg-red-600"
//             }`}
//             onClick={() => handlePageChange(page)}
//           >
//             {page}
//           </button>
//         ))}

//         {currentPage < totalPages - maxPagesToShow && (
//           <>
//             <span className="text-white">...</span>
//             <button
//               className={`px-2 py-1 text-xs mx-1 ${
//                 currentPage === totalPages ? "bg-blue-600" : "bg-red-600"
//               }`}
//               onClick={() => handlePageChange(totalPages)}
//             >
//               {totalPages}
//             </button>
//           </>
//         )}

//         <button
//           className={` px-2 py-1 mx-1 ${
//             currentPage === totalPages
//               ? "hover:bg-sidebarParent cursor-not-allowed"
//               : "bg-sidebarParent"
//           }`}
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages || totalPages === 0}
//         >
//           <FontAwesomeIcon className="text-white " icon={faChevronRight} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationComponent;
