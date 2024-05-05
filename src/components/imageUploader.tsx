import { ImagePlus } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      onImageUpload(file);
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full border">
      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} type="file" className="hidden" />
        <div
          className={`relative border border-dashed border-slate-600 rounded max-w-full h-40 flex justify-center items-center gap-4 ${
            isDragActive ? "bg-gray-200" : ""
          }`}
        >
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="space-y-4 p-4">
              <img
                src="/gallery.png"
                alt="select image"
                className="h-20 w-20 mx-auto"
              />
              <p className="text-sm text-center">
                Drag and drop an image here, or click to select
              </p>
            </div>
          )}
          {selectedFile && (
            <div className="absolute z-10 bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-black/0 flex flex-wrap items-end justify-center p-4">
              <p className="text-xs text-white">
                {selectedFile ? `Selected file : ${selectedFile.name}` : ""}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
