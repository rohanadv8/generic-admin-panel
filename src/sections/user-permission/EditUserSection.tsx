"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import RadioOption from "@/components/RadioOption";
import ToggleField from "@/components/ToggleField";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
interface UserListDto {
  username?: string;
  isActive?: boolean;
  userId?: string;
}
interface Type {
  name: string;
}

const EditUserSection = ({
  user,
  toggleModal,
}: {
  user: UserListDto;
  toggleModal(data: {
    userId?: string;
    isActive?: boolean;
    username?: string;
  }): void;
}) => {
  const editTypes: Type[] = [
    { name: "Read" },
    { name: "Write" },
    { name: "None" },
  ];
  const [errors, setErrors] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    token: "",
  });
  const [formData, setFormData] = useState<{
    userId: string;
    status?: boolean;
    password?: string;
    confirmPassword?: string;
  }>({
    status: user.isActive,
    userId: user.userId ?? "",
  });
  const types: Type[] = [{ name: "Read" }, { name: "Write" }, { name: "None" }];
  const [selectedType, setSelectedType] = useState<string>("");
  const setFormValues = (value: string, key: string) => {
    setFormData({ ...formData, ...{ [key]: value } });
  };
  const setErrorData = (key: string, value: string) => {
    setErrors((oldError) => {
      const newError = { ...oldError, [key]: value };
      return newError;
    });
  };

  return (
    <div
      className="fixed  top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 rounded-lg text-secondary-900"
      onClick={() => {
        toggleModal({});
      }}
    >
      <div
        className="relative bg-primary-200 pt-5 pb-2  rounded-lg shadow-lg w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-5 w-full text-sm">
          <p className=" text-base  text-secondary-900 ml-7 font-semibold">
            {`Edit User : ${user.username} `}
          </p>

          <FontAwesomeIcon
            icon={faXmark}
            className="mr-5 text-sm w-5 text-white bg-gray-700 hover:bg-hoverPrimary"
            onClick={() => {
              toggleModal({});
            }}
          />
        </div>
        <div className="space-y-6 px-6">
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

          <Input
            label="Enter Confirm Password"
            inputPlace="passwordClass"
            placeholder=""
            type="password"
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            name="password"
            onChange={(e) => setFormValues(e.target.value, "confirmPassword")}
            isMandatory={true}
          />

          <ToggleField
            label={"Enter status: "}
            onChange={() => {
              setFormData({ ...formData, status: !formData.status });
            }}
            checked={formData.status ?? false}
          />
          <div className="flex justify-between items-center  pb-6">
            <h3 className="text-medium pl-1">Provide permissions :</h3>
            {editTypes.map((type) => (
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
        </div>

        <div className="flex justify-center pb-2 items-center">
          <Button color="black" onClick={() => {}} text="Edit Member" />
        </div>
      </div>
    </div>
  );
};

export default EditUserSection;
