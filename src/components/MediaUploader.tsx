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
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setUploadedMedia((prev) => [...prev, ...fileArray]);
      // reset input so same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-sm  text-secondary-900 pl-1 mb-1">
        Media {isMandatory && <span className="pl-1 text-red-500">*</span>}
      </label>
      <div className="border-2 border-dashed border-secondary-800 rounded-md p-6 min-h-[160px] flex flex-col items-center justify-center text-center w-full bg-primary-300">
        {uploadedMedia.length > 0 ? (
          <div className=" grid grid-cols-4 gap-4">
            {uploadedMedia.map((file, index) => {
              const isImage = file.type.startsWith("image/");
              const isVideo = file.type.startsWith("video/");
              return (
                <div key={index} className="relative group">
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
                      className="w-full h-20 object-cover rounded-md border border-secondary-800 bg-primary-4OO"
                    />
                  )}{" "}
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
            <div
              onClick={handleUploadClick}
              className="flex items-center justify-center border-2 border-dashed border-secondary-800 rounded-md cursor-pointer bg-primary-200 hover:bg-primary-100 h-20"
            >
              <span className="text-2xl text-gray-500">+</span>
            </div>
          </div>
        ) : (
          <div>
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
            <p className="text-xs  text-left text-secondary-900">
              Accepts images and videos.
            </p>
          </div>
        )}
        {/* always render the hidden input */}
        <input
          type="file"
          accept="image/*,video/*,model/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          className="hidden"
        />
      </div>
    </div>
  );
}

export default MediaUploader;
