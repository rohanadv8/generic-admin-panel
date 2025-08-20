"use client";
import DateTimeRangePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import SelectField from "@/components/SelectField";
import { useState } from "react";
// import Input from "@/components/Input";
interface OrderListStatus {
  label: string;
  value: string;
}
interface CustomerListFilterrDTO {
  //   toggleModal: (state: boolean) => void;
}

export default function CustomerListFilter({}: //   toggleModal,
CustomerListFilterrDTO) {
  const [formData, setFormData] = useState<{
    orderBYId: string;
    customerName: string;
    email: string;
    orderStatus: string;
    minAmount: number;
    maxAmount: number;
    fromDate: string;
    toDate: string;
  }>({
    orderBYId: "",
    customerName: "",
    email: "",
    orderStatus: "",
    minAmount: 0,
    maxAmount: 0,
    fromDate: new Date(new Date().setDate(new Date().getDate() - 7))
      .toISOString()
      .slice(0, 16),
    toDate: new Date().toISOString().slice(0, 16),
  });
  const orderListStatus: Array<OrderListStatus> = [
    { label: "Pending", value: "pending" },
    { label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
  ];
  const SetInputValues = (value: number | string | boolean, key: string) => {
    const setValue = value;
    setFormData((prevState) => {
      return { ...prevState, ...{ [key]: setValue } };
    });
  };
  return (
    <div className="  bg-primary-200 p-4 rounded-lg shadow-xl">
      <h2 className="text-2xl  text-secondary-900 font-semibold flex items-center mb-2">
        {" "}
        Order List
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1  md:gap-4">
        <Input
          label="Search by Order ID"
          inputPlace="basicClasses"
          placeholder=" "
          type="text"
          value={formData?.orderBYId}
          name=""
          onChange={(e) => SetInputValues(e.target.value, "orderBYId")}
          error=""
        />
        <Input
          label="Search by Customer Name"
          inputPlace="basicClasses"
          placeholder=" "
          type="text"
          value={formData?.customerName}
          name=""
          onChange={(e) => SetInputValues(e.target.value, "customerName")}
          error=""
        />
        <Input
          label="Search by Email"
          inputPlace="basicClasses"
          placeholder=" "
          type="text"
          value={formData?.email}
          name=""
          onChange={(e) => SetInputValues(e.target.value, "email")}
          error=""
        />

        <Input
          label="Minimum Amount Range"
          inputPlace="basicClasses"
          placeholder=" "
          type="text"
          value={formData?.minAmount}
          name=""
          onChange={(e) => SetInputValues(e.target.value, "minAmount")}
          error=""
        />

        <Input
          label="Maximum Amount Range"
          inputPlace="basicClasses"
          placeholder=" "
          type="text"
          value={formData?.maxAmount}
          name=""
          onChange={(e) => SetInputValues(e.target.value, "maxAmount")}
          error=""
        />
        <div className="w-full">
          <DateTimeRangePicker
            date={formData.fromDate}
            label="From Date"
            onChange={(e) => SetInputValues(e.target.value, "fromDate")}
          />
        </div>

        <div className="w-full ">
          <DateTimeRangePicker
            date={formData.toDate}
            label="To Date"
            onChange={(e) => SetInputValues(e.target.value, "toDate")}
          />
        </div>
        <SelectField
          label="Select Order Status"
          defaultOption="Select Order Status"
          name="orderStatus"
          value={formData?.orderStatus}
          options={orderListStatus}
          onChange={(e) => SetInputValues(e.target.value, "orderStatus")}
          optionAll={false}
          error=""
        />
      </div>
    </div>
  );
}
