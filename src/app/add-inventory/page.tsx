"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import SelectField from "@/components/SelectField";
import { CategoryList, MarketList } from "@/client/dto/component.dto";
import Description from "@/components/Description";
import MediaUploader from "@/components/MediaUploader";
import RadioOption from "@/components/RadioOption";
import ToggleField from "@/components/ToggleField";
interface Book {
  name: string;
}

export default function AddInventory() {
  const [formData, setFormData] = useState<{
    watchName: string;
    brand: string;
    modelNumber: string;
    category: string;
    gender: string;
  }>({
    watchName: "",
    brand: "",
    modelNumber: "",
    category: "",
    gender: "",
  });
  const [isReturnable, setIsReturnable] = useState<boolean>(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsReturnable(e.target.checked);
  };

  const categoryList: Array<CategoryList> = [
    { label: "Rolex", value: "rolex" },
    { label: "Seiko", value: "seiko" },
    { label: "Omega", value: "omega" },
  ];
  const genderList: Array<CategoryList> = [
    { label: "Mens", value: "mens" },
    { label: "Womens", value: "women" },
    { label: "Bisexual", value: "bisexual" },
  ];
  const books: Book[] = [
    { name: "Continue selling when out of stock" },
    { name: "This product has a SKU or barcode" },
  ];
  const [selectedBook, setSelectedBook] = useState<string>("");

  const SetInputValues = (value: number | string | boolean, key: string) => {
    const setValue = value;
    setFormData((prevState) => {
      return { ...prevState, ...{ [key]: setValue } };
    });
  };
  return (
    <div className="bg-primary-600 text-secondary-900 p-6 ">
      <h2 className="text-xl font-semibold uppercase mb-4 mx-2">
        Add Inventory
      </h2>
      <div className="bg-primary-200 rounded-lg p-6 ">
        <h2 className="text-xl font-semibold mb-4 mx-1">Basic Information</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4  ">
          <Input
            label="Watch Name"
            inputPlace="basicClasses"
            placeholder=" "
            type="text"
            value={formData?.watchName}
            name=""
            onChange={(e) => SetInputValues(e.target.value, "watchName")}
            error=""
            isMandatory={true}
          />

          <Input
            label="Model Number / SKU Number"
            inputPlace="basicClasses"
            placeholder=" "
            type="text"
            value={formData?.modelNumber}
            name=""
            onChange={(e) => SetInputValues(e.target.value, "modelNumber")}
            error=""
            isMandatory={true}
          />

          <SelectField
            label="Select Category"
            defaultOption="Select Category"
            name="category"
            value={formData?.category}
            options={categoryList}
            onChange={(e) => SetInputValues(e.target.value, "category")}
            optionAll={false}
            error=""
            isMandatory={true}
          />
          <SelectField
            label="Select Gender"
            defaultOption="Select Gender"
            name="marketlist"
            value={formData?.gender}
            options={genderList}
            onChange={(e) => SetInputValues(e.target.value, "gender")}
            optionAll={false}
            error=""
            isMandatory={true}
          />

          <Input
            label="Detail Price"
            inputPlace="basicClasses"
            placeholder=" "
            type="text"
            value={formData?.watchName}
            name=""
            onChange={(e) => SetInputValues(e.target.value, "watchName")}
            error=""
            isMandatory={true}
          />
          <Input
            label="Selling Discount"
            inputPlace="basicClasses"
            placeholder=" "
            type="text"
            value={formData?.modelNumber}
            name=""
            onChange={(e) => SetInputValues(e.target.value, "modelNumber")}
            error=""
            isMandatory={true}
          />

          {/* <Input
            label="Quantity in Stock"
            inputPlace="basicClasses"
            placeholder=" "
            type="text"
            value={formData?.modelNumber}
            name=""
            onChange={(e) => SetInputValues(e.target.value, "modelNumber")}
            error=""
            isMandatory={true}
          />

          <Input
            label="Mininum Stock Alert"
            inputPlace="basicClasses"
            placeholder=" "
            type="text"
            value={formData?.modelNumber}
            name=""
            onChange={(e) => SetInputValues(e.target.value, "modelNumber")}
            error=""
            isMandatory={true}
          /> */}
        </div>
        <div className="flex gap-4 ">
          <div className="w-2/3">
            <Description isMandatory={true} />
          </div>

          <div className="w-1/3">
            <MediaUploader isMandatory={true} />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4 ">
          <div className="p-4 w-1/2 border-[1px]  border-secondary-800 rounded-lg bg-primary-300">
            <h1 className="text-lg mb-4 ">Shop location:</h1>
            {books.map((book) => (
              <RadioOption
                key={book.name}
                name="bookType"
                value={book.name}
                label={book.name}
                checked={selectedBook === book.name}
                onChange={(e) => setSelectedBook(e.target.value)}
              />
            ))}

            <div className="mt-4">
              <strong>Selected:</strong> {selectedBook || "None"}
            </div>
          </div>
          <div className="flex flex-col  justify-center items-start w-1/2 border-[1px] border-secondary-800 bg rounded-lg p-4 bg-primary-300">
            <ToggleField
              label="Is Product Returnable?"
              onChange={handleToggle}
              checked={isReturnable}
            />
            <div className="mt-4 text-lg">
              Status:
              <span className="font-semibold">
                {isReturnable ? "Returnable" : "Non-returnable"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
