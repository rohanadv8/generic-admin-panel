"use client";
import CreateUserSection from "@/sections/user-permission/CreateUserSection";
import EditUserSection from "@/sections/user-permission/EditUserSection";
import UserPermissionFilter from "@/sections/user-permission/UserPermissionFilter";
import UserPermissionTable from "@/sections/user-permission/UserPermissionTable";
import React, { useState } from "react";

export default function UserPremission() {
  const [modelOpen, setModelOpen] = useState(false);
  const eventList = [
    {
      id: 1,
      status: false,
      loginName: "rohan",
    },
    {
      id: 2,
      status: false,
      loginName: "snehal",
    },
    {
      id: 3,
      status: false,
      loginName: "krishnan",
    },
    {
      id: 4,
      status: true,
      loginName: "vrushank",
    },
  ];
  const [editForm, setEditForm] = useState<{
    userId?: string;
    isActive?: boolean;
    username?: string;
  }>({});
  const toggleModal = (state: boolean) => {
    setModelOpen(state);
  };
  const toggleEditModel = (data: {
    userId?: string;
    isActive?: boolean;
    username?: string;
  }) => {
    setEditForm(data);
  };
  return (
    <div className="bg-primary-600 p-3">
      {/* <InventoryFilter /> */}
      <UserPermissionFilter toggleModal={toggleModal} />

      <div className=" my-3">
        {/* <InventoryTable /> */}
        <UserPermissionTable setEditForm={setEditForm} eventList={eventList} />
      </div>
      {modelOpen && (
        <CreateUserSection toggleModal={toggleModal}></CreateUserSection>
      )}
      {editForm && editForm.userId && (
        <EditUserSection
          user={editForm}
          toggleModal={toggleEditModel}
        ></EditUserSection>
      )}
    </div>
  );
}
