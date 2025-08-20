import React, { useRef, useState } from "react";
import Button from "./Button";

function MediaUploader({ isMandatory }: { isMandatory: boolean }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedMedia, setUploadedMedia] = useState<File[]>([]);
  const handleRemoveFile = (indexToRemove: number) => {
    setUploadedMedia((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setUploadedMedia((prev) => [...prev, ...fileArray]);
      event.target.value = ""; // Reset input so same file can be selected again
    }
  };

  return (
    <div className="mt-4">
      {/* Main Upload UI */}
      <label className="block text-sm font-medium text-secondary-900 pl-1 mb-1">
        Media
        {isMandatory && <span className="pl-1 text-red-500">*</span>}
      </label>

      <div className="border-2 border-dashed border-secondary-800 rounded-md p-6 min-h-[160px] flex flex-col items-center justify-center text-center w-full bg-primary-300">
        {/* Upload and Select buttons */}
        <div>
          {uploadedMedia.length > 0 ? (
            <div className="mt-4 grid grid-cols-4 gap-4">
              {uploadedMedia.map((file, index) => {
                const isImage = file.type.startsWith("image/");
                const isVideo = file.type.startsWith("video/");

                return (
                  <div key={index} className="relative group">
                    {/* Remove button */}
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="absolute top-1 right-1 z-10 bg-primary-400 bg-opacity-50 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="pb-0.5">×</span>
                    </button>

                    {isImage && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`uploaded-${index}`}
                        className="w-full h-20 object-cover rounded-md border border-secondary-800 bg-primary-400"
                      />
                    )}
                    {isVideo && (
                      <video
                        src={URL.createObjectURL(file)}
                        className="w-full h-20 object-cover rounded-md border border-secondary-800 bg-primary-200"
                        controls
                      />
                    )}
                  </div>
                );
              })}

              {/* Add More Button as + Box */}
              <div
                onClick={handleUploadClick}
                className="flex items-center justify-center border-2 border-dashed border-secondary-800 rounded-md cursor-pointer bg-primary-200 hover:bg-primary-100 h-20"
              >
                <span className="text-2xl text-gray-500">+</span>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-4 mb-2">
                <Button
                  color="black"
                  onClick={handleUploadClick}
                  text="Upload New"
                />
                <button className="text-sm text-secondary-900 hover:underline focus:outline-none">
                  Select existing
                </button>
              </div>
              {/* Upload Info */}
              <p className="text-xs text-secondary-900">
                Accepts images, videos, or 3D models
              </p>
              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/*,video/*,model/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="hidden"
              />
            </>
          )}
        </div>
      </div>

      {/* Preview Grid: Show only if there are uploaded files */}
    </div>
  );
}

export default MediaUploader;
