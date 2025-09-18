"use client";

import { useState } from "react";

export default function DescriptionEditor({
  isMandatory,
}: {
  isMandatory: boolean;
}) {
  const [content, setContent] = useState("");

  return (
    <div className="w-full mt-4 ">
      <label className="block  mb-1 text-sm text-secondary-900">
        Description
        {isMandatory && <span className="pl-1 text-red-500">*</span>}
      </label>

      {/* Toolbar */}

      {/* Editable Area */}
      <div className="border  border-secondary-800 rounded-md p-3 min-h-[160px] bg-primary-300 focus:outline-none">
        {content || "Type here..."}
      </div>
    </div>
  );
}
