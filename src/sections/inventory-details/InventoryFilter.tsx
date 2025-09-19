"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

interface FetchEventsFilterDtoNew {}
interface InventoryDTO {
  watchList: string;
}

export default function FetchEventsFilter({}: FetchEventsFilterDtoNew) {
  const [formData, setFormData] = useState<InventoryDTO>({
    watchList: "",
  });
  const handleInput = (value: number | string, key: string) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        ...{ [key]: value },
      };
    });
  };

  return (
    <div className="  bg-primary-200 p-4 rounded-lg shadow-xl">
      <h2 className="text-2xl  text-secondary-900 font-semibold flex items-center  ">
        {" "}
        Inventory Details
      </h2>
      <div className="flex justify-end items-start space-x-5">
        <div className="w-80 py-2">
          <Input
            inputPlace="basicClasses"
            placeholder=" Search WatchList"
            type="text"
            value={formData.watchList}
            name="watchList"
            onChange={(e) => handleInput(e.target.value, "watchList")}
            error=""
          />
        </div>
        <div className="text-sm w-28 py-2 ">
          <Link href={"/add-inventory"}>
            <Button color="black" onClick={() => {}} text="Add Inventory" />
          </Link>
        </div>
      </div>
    </div>
  );
}
