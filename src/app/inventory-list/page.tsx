"use client";

import InventoryTable from "@/sections/inventory-details/InventoryTable";
import InventoryFilter from "@/sections/inventory-details/InventoryFilter";

const InventoryPage = () => {
  return (
    <div className="bg-primary-600 p-3">
      <InventoryFilter />

      <div className=" my-3">
        <InventoryTable />
      </div>
    </div>
  );
};

export default InventoryPage;
