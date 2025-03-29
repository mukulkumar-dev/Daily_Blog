import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { FiBell, FiSearch, FiSettings } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full px-2 sm:pl-14 py-2 justify-center">
          {/* Header Section */}
          <div className="flex items-center justify-between w-full py-3 px-6 md:px-12 border-b border-gray-400 bg-gray-100 shadow-md">
            <h3 className="font-semibold text-lg">Admin Panel</h3>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center bg-white px-3 py-1 rounded-lg shadow-sm border border-gray-300">
                <FiSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 focus:outline-none w-32 sm:w-48 bg-transparent"
                />
              </div>
              <FiBell className="text-xl cursor-pointer hover:text-blue-500" />
              <FiSettings className="text-xl cursor-pointer hover:text-blue-500" />
              <Image
                src={assets.profile_icon}
                alt="Profile"
                width={40}
                className="rounded-full border border-gray-300"
              />
            </div>
          </div>
          {/* Main Content */}
          <div className="p-4 md:p-6 bg-gray-50 min-h-screen">{children}</div>
        </div>
      </div>
    </>
  );
}
