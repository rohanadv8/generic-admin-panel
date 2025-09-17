"use client";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CustomerListTable() {
  const eventList = [
    {
      id: "1",
      watchName: "1000 SC COL - AC - ALLI",
      price: "₹1,436,400",
      quantity: "3",
    },
    {
      id: "2",
      watchName: "1000 SC COL - AC - ALLI",
      price: "₹1,436,400",
      quantity: "3",
    },
    {
      id: "3",
      watchName: "1000 SC COL - AC - ALLI",
      price: "₹1,436,400",
      quantity: "3",
    },
    {
      id: "4",
      watchName: "1000 SC COL - AC - ALLI",
      price: "₹1,436,400",
      quantity: "3",
    },
  ];
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  useEffect(() => {
    setIsCheckAll(isCheck.length === eventList.length);
  }, [isCheck, eventList]);

  const handleSelectAll = () => {
    if (isCheckAll) {
      setIsCheck([]);
    } else {
      setIsCheck(eventList.map((item) => item.id));
    }
    setIsCheckAll(!isCheckAll);
  };
  const handleCheckboxChange =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setIsCheck((prev) =>
        checked ? [...prev, id] : prev.filter((id) => id !== id)
      );
    };
  return (
    <div className="  bg-primary-200 p-4 rounded-lg shadow-2xl">
      {eventList?.length === 0 ? (
        <h2 className="mt-3 text-secondary-900">No event yet.</h2>
      ) : (
        <table className=" w-full  text-secondary-900  px-2 overflow-x-auto ">
          <thead>
            <tr className="font-semibold bg-primary-400  w-full   ">
              <th className="p-2">
                {" "}
                <input
                  id="selectAll"
                  name="selectAll"
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={isCheckAll}
                  className="w-4 h-4 mr-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </th>
              <th className="p-2  ">Customer Name</th>
              <th className="p-2  ">Email</th>
              <th className="p-2  ">Orders</th>
              <th className="p-2 ">Action</th>
            </tr>
          </thead>

          <tbody>
            {eventList?.map((event, index) => (
              <tr
                key={event?.id}
                className={`hover:bg-primary-600 text-sm ${
                  index % 2 === 0 ? "bg-primary-200" : "bg-primary-100"
                } `}
              >
                <td className="p-2  text-center ">
                  {" "}
                  <div>
                    <input
                      id={event.id.toString()}
                      type="checkbox"
                      checked={isCheck.includes(event.id)}
                      onChange={handleCheckboxChange(event.id)}
                      className="w-4 h-4 mr-1  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td className="p-2  text-center">{event?.watchName}</td>
                <td className="p-2  text-center">{event?.price}</td>
                <td className="p-2  text-center">{event?.quantity}</td>
                <td className="p-2 text-center">
                  <div className="relative group" title="Edit">
                    <Link href="">
                      <button className={` py-1 px-2 cursor-pointer`}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{ color: "#279639" }}
                        />
                      </button>
                    </Link>
                    <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-no-wrap">
                      <span>Edit</span>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 -mt-1"></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
