"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      toast.error("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  // Delete Blog
  const deleteBlog = async (mongoId) => {
    try {
      const response = await axios.delete("/api/blog", {
        params: { id: mongoId },
      });
      toast.success(response.data.msg);
      fetchBlogs();
    } catch (error) {
      toast.error("Error deleting the blog.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16"
    >
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-semibold mb-6"
      >
        📚 All Blogs
      </motion.h1>

      {/* Enlarged Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[90vh] max-w-[1100px] overflow-x-auto mt-6 border border-gray-300 shadow-lg rounded-xl bg-white p-6"
      >
        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-600 animate-pulse">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-600">No blogs available.</p>
          </div>
        ) : (
          <table className="w-full text-md text-gray-700">
            {/* Table Headings */}
            <thead className="text-lg text-gray-800 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-8 py-4 text-left">
                  Author
                </th>
                <th scope="col" className="px-8 py-4 text-left">
                  Title
                </th>
                <th scope="col" className="px-8 py-4 text-left">
                  Date
                </th>
                <th scope="col" className="px-8 py-4 text-left">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {blogs.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-300 hover:bg-gray-100 transition-all"
                >
                  {/* Author Section (Image + Name) */}
                  <td className="px-8 py-5 flex items-center gap-4">
                    <Image
                      src={item.authorImg}
                      alt={item.author}
                      width={50}
                      height={50}
                      className="rounded-full border border-gray-300"
                    />
                    <p className="font-semibold">{item.author}</p>
                  </td>

                  {/* Title Section (Heading + Text) */}
                  <td className="px-8 py-5">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                  </td>

                  {/* Date Section */}
                  <td className="px-8 py-5">{item.date}</td>

                  {/* Delete Button */}
                  <td className="px-8 py-5">
                    <button
                      onClick={() => deleteBlog(item._id)}
                      className="text-red-500 hover:text-red-700 transition-all"
                    >
                      <MdDelete size={24} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Page;
