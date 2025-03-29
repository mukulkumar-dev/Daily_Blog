"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

const authors = [
  { name: "Harry Potter", img: "/authorImg.png" },
  { name: "John Doe", img: "/authorImg.png" },
  { name: "Alice Smith", img: "/authorImg.png" },
];

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "",
    authorImg: "",
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading,
      Bold,
      Italic,
      BulletList,
      ListItem,
      Paragraph,
      Text,
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setData((prev) => ({ ...prev, description: editor.getHTML() }));
    },
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onAuthorChange = (event) => {
    const selectedAuthor = authors.find((a) => a.name === event.target.value);
    setData((prevData) => ({
      ...prevData,
      author: selectedAuthor ? selectedAuthor.name : "",
      authorImg: selectedAuthor ? selectedAuthor.img : "",
    }));
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", randomAuthor.name);
    formData.append("authorImg", randomAuthor.img);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(null);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "",
          authorImg: "",
        });
        editor?.commands.setContent("");
      } else {
        toast.error("Error uploading blog.");
      }
    } catch (error) {
      toast.error("Server error. Try again later.");
    }
  };

  return (
    <motion.div className="flex flex-col items-center p-6 sm:p-12">
      <motion.form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full"
      >
        {/* Upload Blog Thumbnail */}
        <p className="text-xl font-semibold mb-2">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4 cursor-pointer border-2 border-dashed border-gray-400 rounded-lg"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload"
            width={250}
            height={150}
          />
        </label>
        <input onChange={onImageChange} type="file" id="image" hidden />

        {/* Blog Title */}
        <p className="text-xl font-semibold mt-5">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full px-4 py-3 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-300"
          type="text"
          placeholder="Type title here..."
          required
        />

        {/* Blog Description */}
        <p className="text-xl font-semibold mt-5">Blog Description</p>
        <div className="border rounded-lg mt-2 p-2 min-h-[150px] bg-gray-50 shadow-sm">
          <EditorContent editor={editor} className="min-h-[100px]" />
        </div>

        {/* Blog Category */}
        <p className="text-xl font-semibold mt-5">Blog Category</p>
        <select
          className="w-full px-4 py-3 border rounded-lg text-gray-600 mt-2 focus:ring-2 focus:ring-blue-300"
          name="category"
          onChange={onChangeHandler}
          value={data.category}
        >
          <option value="Startup"> Startup </option>
          <option value="Technology"> Technology </option>
          <option value="Lifestyle"> Lifestyle </option>
        </select>

        {/* Submit Button */}
        <motion.button
          className="mt-8 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          type="submit"
        >
          ADD BLOG
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Page;
