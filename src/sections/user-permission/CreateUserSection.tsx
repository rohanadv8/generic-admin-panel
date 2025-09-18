"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import RadioOption from "@/components/RadioOption";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
interface Type {
  name: string;
}

const CreateUserSection = ({
  toggleModal,
}: {
  toggleModal(key: boolean): void;
}) => {
  const types: Type[] = [{ name: "Read" }, { name: "Write" }, { name: "None" }];
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    token: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userType: "User",
    confirmPassword: "",
    isActive: true,
  });
  const [selectedType, setSelectedType] = useState<string>("");
  const setFormValues = (value: string, key: string) => {
    setFormData({ ...formData, ...{ [key]: value } });
  };

  return (
    <div
      className="fixed  top-0 left-0 w-full h-full flex items-center justify-center bg-black  bg-opacity-75 rounded-lg text-secondary-900"
      onClick={() => {
        toggleModal(false);
      }}
    >
      <div
        className="relative bg-primary-200 py-5 rounded-lg shadow-lg w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between  w-full text-sm">
          <p className=" text-base font-semibold text-secondary-900 ml-5">
            {"Create User"}
          </p>

          <FontAwesomeIcon
            icon={faXmark}
            className="mr-5 text-sm w-5 p-0.5 rounded text-primary-600 bg-secondary-900 hover:bg-secondary-800"
            onClick={() => {
              toggleModal(false);
            }}
          />
        </div>
        <div className="p-5">
          <Input
            label="Enter Username"
            inputPlace="basicClasses"
            placeholder=" "
            type="text"
            value={formData?.username}
            name=""
            onChange={(e) => setFormValues(e.target.value, "username")}
            error=""
            isMandatory={true}
          />

          <div className="mt-6">
            <Input
              label="Enter Password"
              inputPlace="passwordClass"
              placeholder=" "
              type="password"
              value={formData?.password}
              name=""
              onChange={(e) => setFormValues(e.target.value, "password")}
              error={errors.password}
              isMandatory={true}
            />
          </div>
          <div className="mt-6">
            <Input
              label="Enter Confirm Password"
              inputPlace="passwordClass"
              placeholder=""
              type="password"
              value={formData.confirmPassword}
              error={errors.confirmPassword}
              name=""
              onChange={(e) => setFormValues(e.target.value, "confirmPassword")}
              isMandatory={true}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mx-5 pb-6">
          <h3 className="text-medium ">Provide permissions :</h3>
          {types.map((type) => (
            <RadioOption
              key={type.name}
              name="bookType"
              value={type.name}
              label={type.name}
              checked={selectedType === type.name}
              onChange={(e) => setSelectedType(e.target.value)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button color="black" onClick={() => {}} text="Save Member" />
        </div>
      </div>
    </div>
  );
};

export default CreateUserSection;
