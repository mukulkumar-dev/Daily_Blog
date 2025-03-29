"use client";

import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <Link href={`/blogs/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial fade-in effect
        animate={{ opacity: 1, y: 0 }} // Smooth transition
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }} // Hover effect
        whileTap={{ scale: 0.95, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }} // Click effect
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-[340px] h-[420px] bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer"
      >
        {/* Blog Image */}
        <Link href={`/blogs/${id}`} className="block">
          <motion.div
            whileHover={{ scale: 1.03 }} // Subtle image zoom on hover
            className="relative w-full h-[200px] overflow-hidden"
          >
            <Image
              src={`/${image}`}
              alt={title}
              layout="fill"
              objectFit="cover" // Ensure image fills the area without distortion
              className="rounded-t-2xl transition-transform duration-300"
            />
          </motion.div>
        </Link>

        {/* Category */}
        <p className="ml-5 mt-4 px-3 py-1 inline-block bg-gray-900 text-white text-xs font-semibold rounded-lg">
          {category}
        </p>

        {/* Blog Content */}
        <div className="p-5 h-[180px] overflow-hidden">
          {/* Title */}
          <h5 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {title}
          </h5>

          {/* Formatted Description */}
          <div
            className="mt-2 text-sm text-gray-600 line-clamp-3" // Limit description to 3 lines
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* Read More Button */}
          <motion.div
            whileHover={{ x: 5 }} // Moves slightly right on hover
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Link
              href={`/blogs/${id}`}
              className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
            >
              Read more
              <Image
                src={assets.arrow}
                alt="arrow"
                width={12}
                className="ml-2"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogItem;
