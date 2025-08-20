import CustomerListFilter from "@/sections/customer-list/CustomerListFilter";
import CustomerListTable from "@/sections/customer-list/CustomerListTable";
import React from "react";

export default function CustomerList() {
  return (
    <div className="bg-primary-600 p-3">
      <CustomerListFilter />
      <div className=" my-3">
        <CustomerListTable />{" "}
      </div>
    </div>
  );
}
