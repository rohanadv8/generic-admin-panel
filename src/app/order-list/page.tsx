import OrderListFilter from "@/sections/order-list/OrderListFilter";
import OrderListTable from "@/sections/order-list/OrderListTable";
import React from "react";

export default function OrderList() {
  return (
    <div className="bg-primary-600 p-3">
      <OrderListFilter />

      <div className=" my-3">
        <OrderListTable />
      </div>
    </div>
  );
}
