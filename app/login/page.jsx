"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-gray-400 to-gray-500"></div>
      {/* Animated Login Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col bg-white shadow-lg rounded-xl overflow-hidden max-w-3xl w-full h-auto z-10"
      >
        {/* Right Side - Login Form (Centered) */}
        <div className="w-full p-12 bg-white flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Login to Your Account
            </h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                Log In
              </button>
            </form>

            {/* Social Logins */}
            <div className="flex items-center justify-between mt-4">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md w-1/2">
                <FaGoogle className="text-red-500" /> Google
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md w-1/2">
                <FaTwitter className="text-blue-400" /> Twitter
              </button>
            </div>

            {/* Signup Link */}
            <p className="mt-6 text-center text-gray-600">
              Don't have an Account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
