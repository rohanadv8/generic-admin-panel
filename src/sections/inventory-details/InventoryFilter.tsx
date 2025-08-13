"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface FetchEventsFilterDtoNew {}

export default function FetchEventsFilter({}: FetchEventsFilterDtoNew) {
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
            value={""}
            name=""
            onChange={() => {}}
            error=""
          />
        </div>
        <div className="text-sm w-28 py-2 ">
          <Button color="black" onClick={() => {}} text="Add Inventory" />
        </div>
      </div>
    </div>
  );
}
