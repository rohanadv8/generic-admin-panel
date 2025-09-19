"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
// import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

interface UserPermissionFilterDTO {
  toggleModal: (state: boolean) => void;
}
interface UserDTO {
  userName: string;
}

export default function UserPermissionFilter({
  toggleModal,
}: UserPermissionFilterDTO) {
  const [formData, setFormData] = useState<UserDTO>({
    userName: "",
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
        User Access
      </h2>
      <div className="flex justify-end items-start space-x-5">
        <div className="w-80 py-2">
          <Input
            inputPlace="basicClasses"
            placeholder=" Search User"
            type="text"
            value={formData.userName}
            name="userName"
            onChange={(e) => handleInput(e.target.value, "userName")}
            error=""
          />
        </div>
        <div className="text-sm w-40 py-2 ">
          <Button
            color="black"
            onClick={() => {
              toggleModal(true);
            }}
            text="Create User Access"
          />
        </div>
      </div>
    </div>
  );
}
