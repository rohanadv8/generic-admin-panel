"use client";

import { useState } from "react";

export default function DescriptionEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="w-full my-2 ">
      <label className="block pl-1 mb-1 text-sm font-medium text-secondary-900 ">
        Description
      </label>

      {/* Toolbar */}

      {/* Editable Area */}
      <div className="border  border-secondary-800 rounded-md p-3 min-h-[160px] bg-primary-300 focus:outline-none">
        {content || "Type here..."}
      </div>
    </div>
  );
}
