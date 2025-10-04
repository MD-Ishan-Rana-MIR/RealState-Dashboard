"use client";
import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

const BlogUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // 🖼 Handle image upload + preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 📝 Handle editor change
  const handleEditorChange = (e) => {
    setDescription(e.htmlValue || "");
  };

  // 💾 Dummy submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);
  };

  return (
    <div className="pb-10 pt-6 px-6 border border-gray-300 rounded-[14px] shadow-sm bg-white">
      <h1 className="text-[#10101E] font-bold text-3xl md:text-4xl mb-2">
        Upload Blog
      </h1>
      

      <form onSubmit={handleSubmit} className="mx-auto mt-6 space-y-6">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter policy title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-0 outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:ring-0 py-2 outline-none"
          />
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="h-32 w-32 object-cover rounded-lg border border-gray-200"
              />
            </div>
          )}
        </div>

        {/* PrimeReact Editor */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <Editor
            value={description}
            onTextChange={handleEditorChange}
            style={{ height: "300px" }}
            placeholder="Write your privacy policy description..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            label="Save Policy"
            icon="pi pi-check"
            className="w-full md:w-auto btnColor  px-6 py-2 font-semibold text-white rounded-[8px] transition-colors"
          />
        </div>
      </form>

     
    </div>
  );
};

export default BlogUpload;
