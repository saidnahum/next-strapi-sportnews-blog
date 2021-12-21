import React from 'react'
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { API_URL } from '../../config';
import Image from 'next/image';
import Link from 'next/link';

const SingleNews = ({news}) => {
   const router = useRouter();

   return (
      <Layout>
         <div className='container mx-auto my-10 max-w-4xl'>
            <span className='text-gray-600'>
               {news.date} - {news.time}
            </span>
            <h1 className='font-bold text-4xl mt-5'>{news.name}</h1>
            <div className='max-w-4xl mx-auto my-10 shadow-lg rounded-lg'>
               <Image
                  src={news.image}
                  width={900}
                  height={600}
                  layout='responsive'
                  className='rounded-lg'
               />
            </div>
            <p className='text-justify leading-7 text-lg mb-5'>{news.detail}</p>
            <Link href='/news'>
               <a className='bg-gray-400 px-3 py-2 rounded text-white font-bold'>
                  Go back
               </a>
            </Link>
         </div>
      </Layout>
   )
}

export async function getStaticPaths(){
   const res = await fetch(`${API_URL}/api/news`)
   const news = await res.json()

   const paths = news.map((item) => ({
      params: {slug: item.slug}
   }))

   return {
      paths,
      fallback: false
   }
}

export async function getStaticProps({params: {slug}}) {
   const res = await fetch(`${API_URL}/api/news/${slug}`);
   const singleNews = await res.json();

   return {
      props: {
         news: singleNews[0]
      },
      revalidate: 1
   }
}

export default SingleNews;