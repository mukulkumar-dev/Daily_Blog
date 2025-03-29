"use client";

import { use } from "react";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Page = ({ params }) => {
  const resolvedParams = use(params);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        if (!resolvedParams?.id) return;

        const response = await axios.get("/api/blog", {
          params: { id: resolvedParams.id },
        });

        setData(response.data);
      } catch (err) {
        setError("Failed to load blog data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [resolvedParams]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={200}
              alt="Logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="Arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          {data.authorImg && (
            <Image
              className="mx-auto mt-6 border border-white rounded-full"
              src={data.authorImg}
              width={60}
              height={60}
              alt="Author"
            />
          )}
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        {data.image && (
          <Image
            className="border-4 border-white"
            src={`/${data.image}`}
            width={1280}
            height={720}
            alt="Blog Cover"
          />
        )}
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        {/* Render HTML properly */}
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={60} alt="Facebook" />
            <Image src={assets.twitter_icon} width={60} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={60} alt="Google+" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <p>No blog found.</p>
  );
};

export default Page;
