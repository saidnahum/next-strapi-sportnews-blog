import React from 'react'
import { API_URL } from '../config';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

export const NewsItem = ({ news }) => {

   console.log(news);

   return (
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm col-span-12 sm:col-span-6 lg:col-span-4">
         <Image  
            src={news.image ? news.image.formats.small.url : 'No Image'}
            width={news.image.width}
            height={news.image.height}
            layout='responsive'
            objectFit='cover'
         />
         <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
               <Link
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
               >
                  category
               </Link>
               <span className="text-gray-600"> — {moment(news.date).format("yyyy-MM-DD")} {news.time}</span>
            </p>
            <Link
               href='/'
               aria-label="Category"
               title="Visit the East"
               className=""
            >
               <a className='inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700 line-clamp-2'>
                  {news.name}
               </a>
            </Link>
            <p className="mb-2 text-gray-700 line-clamp-3">
               {news.detail}
            </p>
            <Link
               href={`/news/${news.slug}`}
               aria-label=""
               className=""
            >
               <a className='bg-red-500 px-2 py-1 rounded text-white inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
                  Read More
               </a>
            </Link>
         </div>
      </div>

   );
};

export default NewsItem
