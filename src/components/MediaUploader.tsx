import React, { useRef } from "react";
import Button from "./Button";

const MediaUploader = () => {
  const fileInputRef = useRef(null);

  // const handleUploadClick = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     console.log("Selected file:", file);
  //     // handle upload logic
  //   }
  // };

  return (
    <div className="my-2">
      <label className="block text-sm font-medium text-secondary-900 pl-1 mb-1">
        Media
      </label>

      <div className="border-2 border-dashed border-secondary-800 rounded-md p-6 min-h-[160px] flex flex-col items-center justify-center text-center w-full bg-primary-300">
        {/* Upload and Select buttons */}
        <div className="flex items-center space-x-4 mb-2">
          <Button color="black" onClick={() => {}} text="Upload New" />
          <button className="text-sm text-secondary-900 hover:underline focus:outline-none">
            Select existing
          </button>
        </div>

        {/* Upload Info */}
        <p className="text-xs text-secondary-900">
          Accepts images, videos, or 3D models
        </p>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          // onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default MediaUploader;
