// src/components/LayoutWrapper.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header";

import Sidebar from "@/components/SideBar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`flex-1 transition-all duration-500 ${
            isSidebarOpen ? "ml-64" : "ml-5"
          } mt-2`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
