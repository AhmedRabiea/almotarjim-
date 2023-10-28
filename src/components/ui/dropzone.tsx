import { useDropzone } from "react-dropzone";
import UploadedFile from "../UploadedFile";
import { Button } from "./button";
import { HiTrash } from "react-icons/hi";
import UploadedFileType from "@/interfaces/uploadedFile";
import { Dispatch, SetStateAction } from "react";

export type DropzoneContentProps = {
  children: JSX.Element | JSX.Element[];
};
const DropzoneContent = ({ children }: DropzoneContentProps) => {
  return (
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg
        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      {children}
    </div>
  );
};

export type DropzoneProps = {
  files: UploadedFileType[];
  setFiles: Dispatch<SetStateAction<UploadedFileType[]>>;
};

const Dropzone = ({ files, setFiles }: DropzoneProps) => {
  const onDrop: any = (files: File[]) => {
    setFiles(files.map((file, idx) => ({ file, id: idx })));
  };
  const removeFile = (file: UploadedFileType) => {
    setFiles((prev: UploadedFileType[]) =>
      prev.filter((f) => f.id !== file.id)
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div className="flex items-center w-full">
      {!files.length && (
        <div
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          {...getRootProps()}
        >
          {!isDragActive && (
            <DropzoneContent>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </DropzoneContent>
          )}
          {isDragActive && (
            <DropzoneContent>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Drop files to upload</span>
              </p>
            </DropzoneContent>
          )}

          <input type="file" className="hidden" {...getInputProps()} />
        </div>
      )}
      {files.length > 0 && (
        <div className="flex flex-col gap-4 w-full">
          {files.map(({ file, id }) => (
            <UploadedFile key={id} fileName={file.name}>
              <Button variant="danger" onClick={() => removeFile({ file, id })}>
                <HiTrash />
              </Button>
            </UploadedFile>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropzone;
