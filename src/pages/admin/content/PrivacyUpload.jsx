
import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

const PrivacyUpload = () => {
  const [content, setContent] = useState("");

  // Handle Editor change
  const handleEditorChange = (e) => {
    setContent(e.htmlValue || "");
  };

  // Dummy submit (no API)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Content:", content);
  };

  return (
    <div className="pb-10 pt-5 px-6 border border-[#B0B0B0] rounded-[14px] shadow-sm bg-white">
      <h1 className="text-[#10101E] font-bold text-3xl md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-gray-600">
        Admin can create or update the privacy policy.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto mt-6 space-y-6">
        {/* PrimeReact Editor */}
        <Editor
          value={content}
          onTextChange={handleEditorChange}
          style={{ height: "350px" }}
          placeholder="Write your privacy policy..."
        />

        {/* Submit Button */}
        <div className="flex justify-end gap-4 mt-10">
          <Button
            type="submit"
            label="Save Policy"
            icon="pi pi-check"
            className="w-full md:w-auto btnColor  px-6 py-2 font-semibold text-white rounded-[8px] transition-colors"
          />
        </div>
      </form>

      {/* Live Preview */}
      {content && (
        <div className="mt-10 border-t border-gray-300 pt-6">
          <h2 className="text-xl font-bold text-[#10101E] mb-3">Live Preview</h2>
          <div
            className="text-gray-700 leading-relaxed space-y-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      )}
    </div>
  );
};

export default PrivacyUpload;
