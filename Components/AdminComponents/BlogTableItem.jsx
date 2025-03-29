'use client'

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {

  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap items-center gap-3 hidden sm:flex"
       >
        <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} alt='' />
        <p>{author?author:"No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td className="px-6 py-4 cursor-pointer" onClick={()=>deleteBlog(mongoId)}>X</td>
    </tr>
  );
}

export default BlogTableItem