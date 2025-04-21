"use client";
import React, { useState } from 'react';
import { FaUpload } from "react-icons/fa6";

export default function page() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="bg-[#e0d1b7] w-full max-w-xs p-4 rounded-md flex flex-col items-center space-y-4">
        <div className="bg-[#818261] rounded-full w-36 h-36 flex items-center justify-center">
          <FaUpload  className="w-14 h-14 text-black" />
        </div>

        <label className="bg-zinc-800 text-white font-semibold italic px-4 py-2 rounded-md cursor-pointer">
          Upload
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>

        <div className="text-[8px] text-black text-center py-2 px-4">
          <p>Please click a clear image of the product and upload the file above</p>
          <p>कृपया उत्पाद का स्पष्ट फोटो लें और उसे ऊपर दी गई जगह पर अपलोड करें।</p>
          <p>অনুগ্রহ করে পণ্যের একটি পরিষ্কার ছবি তুলুন এবং উপরে আপলোড করার জন্য নির্ধারিত স্থানে আপলোড করুন।</p>
        </div>

        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-md" />
        )}

        <div className="w-full flex gap-2 text-black">
          <input type="text" placeholder="Product Name" className="w-1/2 p-2 rounded-md text-sm bg-white" />
          <input type="text" placeholder="Price" className="w-1/2 p-2 rounded-md text-sm bg-white" />
        </div>

        <textarea
          placeholder="Product description"
          className="w-full p-2 rounded-md text-sm h-28 text-black bg-white "
        ></textarea>

        <button className="bg-zinc-800 text- text-white px-2 py-1 rounded-md">Submit</button>
      </div>
    </div>
  );
}
