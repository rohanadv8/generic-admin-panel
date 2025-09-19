"use client";
// import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
// import Input from "@/components/Input";

interface CustomerListFilterrDTO {
  //   toggleModal: (state: boolean) => void;
}
interface CustomerDTO {
  customer: string;
}
export default function CustomerListFilter({}: //   toggleModal,
CustomerListFilterrDTO) {
  const [formData, setFormData] = useState<CustomerDTO>({
    customer: "",
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
        Customers
      </h2>
      <div className="flex justify-end items-start space-x-5">
        <div className="w-80 py-2">
          <Input
            inputPlace="basicClasses"
            placeholder=" Search Customers"
            type="text"
            value={formData.customer}
            name="customer"
            onChange={(e) => handleInput(e.target.value, "customer")}
            error=""
          />
        </div>
        {/* <div className="text-sm w-40 py-2 ">
          <Button
            color="black"
            onClick={() => {
              toggleModal(true);
            }}
            text="Create User Access"
          />
        </div> */}
      </div>
    </div>
  );
}
