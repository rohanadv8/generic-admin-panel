"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import SelectField from "@/components/SelectField";
import { CategoryList, MarketList } from "@/client/dto/component.dto";
import Description from "@/components/Description";
import MediaUploader from "@/components/MediaUploader";

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

  const SetInputValues = (value: number | string | boolean, key: string) => {
    const setValue = value;
    setFormData((prevState) => {
      return { ...prevState, ...{ [key]: setValue } };
    });
  };
  return (
    <div className="bg-primary-600 text-secondary-900 p-6 ">
      <h2 className="text-xl font-semibold mb-4 mx-2">Add Inventary</h2>
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
            <Description />
          </div>

          <div className="w-1/3">
            <MediaUploader />
          </div>
        </div>
      </div>
    </div>
  );
}
