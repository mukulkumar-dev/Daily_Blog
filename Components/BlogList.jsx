import { blog_data } from "@/Assets/assets";
import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";
import { motion } from "framer-motion";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {/* Header Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-center gap-6 my-10 mt-20 text-xl mb-20"
      >
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : ""
          }
        >
          Lifestyle
        </button>
      </motion.div>

      {/* Blog List Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }} // Adding delay for staggered effect
        className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24"
      >
        {blogs
          .filter((item) => (menu == "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1, // Adding delay to create stagger effect for each blog item
                }}
              >
                <BlogItem
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                />
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default BlogList;
