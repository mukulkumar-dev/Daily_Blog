"use client";

import { motion } from "framer-motion";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className="flex flex-col bg-gray-100 border-r border-gray-300 shadow-lg transition-all duration-300"
      style={{ minHeight: "100vh" }}
    >
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 sm:pl-14 py-5 border-b border-gray-300 flex justify-center"
      >
        <Link href="/">
          <Image
            src={assets.logo}
            alt="Logo"
            width={120}
            height={50}
            style={{ width: "auto", height: "auto" }} // Preserving aspect ratio
          />
        </Link>
      </motion.div>

      {/* Sidebar Menu */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-32 sm:w-80 relative py-10"
      >
        <div className="w-[80%] absolute right-0 space-y-6">
          {/* Add Blog Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admin/addProduct"
              className="flex items-center border border-black gap-3 font-medium px-4 py-3 bg-white shadow-lg transition-all duration-300 hover:bg-gray-200"
            >
              <Image
                src={assets.add_icon}
                alt="Add Blog"
                width={28}
                height={28}
                style={{ width: "auto", height: "auto" }} // Preserving aspect ratio
              />
              <p className="text-lg">Add Blog</p>
            </Link>
          </motion.div>

          {/* Blog List Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admin/blogList"
              className="flex items-center border border-black gap-3 font-medium px-4 py-3 bg-white shadow-lg transition-all duration-300 hover:bg-gray-200"
            >
              <Image
                src={assets.blog_icon}
                alt="Blog List"
                width={28}
                height={28}
                style={{ width: "auto", height: "auto" }} // Preserving aspect ratio
              />
              <p className="text-lg">Blog List</p>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
