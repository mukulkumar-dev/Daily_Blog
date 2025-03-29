"use client";

import { assets } from "@/Assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { FiHome, FiSearch, FiMoon } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="py-4 px-5 md:px-12 lg:px-28 bg-white shadow-md"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={assets.logo}
              width={200}
              alt="Logo"
              className="w-[130px] sm:w-auto cursor-pointer"
            />
          </motion.div>

          {/* Navigation Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center gap-6 text-xl text-gray-700"
          >
            <FiHome className="cursor-pointer hover:text-black transition-all" />
            <FiSearch className="cursor-pointer hover:text-black transition-all" />
            <FiMoon className="cursor-pointer hover:text-black transition-all" />
          </motion.div>

          {/* Login & Signup Buttons */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#f5f5f5" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="hidden sm:block py-2 px-5 border border-gray-500 rounded-lg hover:bg-gray-200 transition-all"
                >
                  Login
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link href="/signup">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="py-2 px-5 sm:py-3 sm:px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
                >
                  Sign Up
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-center my-8"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-5xl font-medium mt-20"
        >
          "Fuel Your Curiosity, One Blog at a Time!"
        </motion.h1>

        <p className="mt-5 max-w-[740px] mx-auto text-sm sm:text-base text-gray-600">
          Step into a world of ideas, inspiration, and discovery. From expert
          insights to trending topics, our blogs bring you thought-provoking
          stories, in-depth analysis, and fresh perspectives that keep you
          informed and engaged.
        </p>

        {/* Create Blog Button */}
        <Link href="/admin/addProduct">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#333", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-8 py-3 px-6 sm:py-4 sm:px-8 bg-black text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all"
          >
            Create Blog
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Header;
