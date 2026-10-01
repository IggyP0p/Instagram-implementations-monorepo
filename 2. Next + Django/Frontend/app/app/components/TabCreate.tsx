'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import publish from "../features/contents/publish";

interface TabCreateProps {
   onClose: () => void
}

export default function TabCreate({
   onClose
}: TabCreateProps) {

   const [file, setFile] = useState<File | null>(null);
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
   const [fileType, setFileType] = useState<"image" | "video" | null>(null);
   const [caption, setCaption] = useState("");
   const [loading, setLoading] = useState(false);
   const [isDragging, setIsDragging] = useState(false);

   const fileInputRef = useRef<HTMLInputElement>(null);

   // File type handle
   const handleFileSelect = (selectedFile: File) => {
      if (!selectedFile) return;

      const objectUrl = URL.createObjectURL(selectedFile);

      if (selectedFile.type.startsWith("image/")) {
         setFileType("image");
         setFile(selectedFile);
         setPreviewUrl(objectUrl);

      } else if (selectedFile.type.startsWith("video/")) {
         setFileType("video");
         setFile(selectedFile);
         setPreviewUrl(objectUrl);

      } else {
         alert("Please, select a valid image or video");
         return;
      }
   }

   // Handle Drag and Drop feature
   const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
   };

   const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
   };

   const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
         handleFileSelect(e.dataTransfer.files[0]);
      }
   };

   // Handling fetch
   const handleSubmit = async () => {
      if (!file) return;

      setLoading(true);

      try {
         const dataToSubmit = new FormData();
         dataToSubmit.append("content", file);

         const contentType = fileType === "video" ? "reels" : "post";
         dataToSubmit.append("type", contentType);

         await publish(dataToSubmit);

         alert("Published!")
         onClose();

      } catch (error: any) {
         console.error(error);
         alert(error.message || "Error trying publish.");

      } finally {
         setLoading(false);

      }
   };

   return (
      <div
         className="fixed h-screen w-screen bg-transparent"
         onClick={() => onClose()}
      >
         <div className="h-full w-full bg-black/65 ml-66">
            <div
               className={`flex flex-col items-center justify-center fixed border border-gray-200 rounded-2xl shadow-xl
                  bg-white ${!file ? "w-lg h-128 top-2/8 left-3/8" : "w-5xl h-200 top-1/10 left-2/7"} `}
               onClick={(e) => e.stopPropagation()}
            >
               {/* Header */}
               <div className="flex items-center justify-center w-full h-auto border-b border-b-gray-300 p-2">

                  <span className="font-bold text-lg">Create new post</span>
               </div>

               {/* Hidden Input for files */}
               <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*, video/*"
                  onChange={(e) => {
                     if (e.target.files?.[0]) {
                        handleFileSelect(e.target.files[0]);
                     }
                  }}
               />

               {/* Content: Drop area or Preview */}
               {!file ? (
                  <div
                     className={`flex flex-col items-center justify-center w-full h-full gap-6 p-8 transition-colors
                        ${isDragging ? "bg-blue-50/50 border-2 border-dashed border-blue-400" : "" } `}
                     onDragOver={handleDragOver}
                     onDragLeave={handleDragLeave}
                     onDrop={handleDrop}
                  >
                     <Image
                        src="/pictures.jpeg"
                        alt="pictures"
                        width={120}
                        height={120}
                        className="object-contain"
                     />
                     <span className="text-xl">Drag photos and videos here</span>

                     <Button onClick={() => fileInputRef.current?.click()}>
                        Select from computer
                     </Button>
                  </div>
               ) : (
                  <div className="flex flex-row items-center w-full p-4 gap-4">
                        {/* Preview Container */}
                        <div className="relative w-auto h-180 bg-black aspect-9/16 rounded-lg overflow-hidden flex items-center justify-center">
                           {fileType === "image" && previewUrl && (
                              <Image
                                 src={previewUrl}
                                 alt="Preview"
                                 fill
                                 className="object-cover w-auto h-auto"
                                 priority
                              />
                           )}
                           {fileType === "video" && previewUrl && (
                              <video
                                 src={previewUrl}
                                 controls
                                 className="w-full h-full object-contain"
                              />
                           )}
                        </div>

                        {/* Optional Legend */}
                        <div className="flex flex-1 flex-col h-full">
                           <textarea
                              placeholder="Enter a Legend"
                              value={caption}
                              onChange={(e) => setCaption(e.target.value)}
                              className="h-auto min-h-40 overflow-y-auto w-auto border border-black-100 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 mt-6"
                           />
                           <div className="flex flex-row w-full gap-3 mt-4">
                              <Button
                                 onClick={() => {
                                    if (previewUrl){
                                       URL.revokeObjectURL(previewUrl);
                                    }
                                    setFile(null);
                                    setPreviewUrl(null);
                                    setFileType(null);
                                 }}
                              >
                                 Cancel
                              </Button>
                              <Button
                                 onClick={handleSubmit}
                                 disabled={loading}
                              >
                                 {loading ? "Loading..." : "Share"}
                              </Button>
                           </div>
                        </div>
                  </div>
               )}

            </div>
         </div>
      </div>
   );
}
