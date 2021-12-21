import React from 'react'
import Layout from '../components/Layout'
import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'

export default function NotFound(){
   return (
      <Layout>
         <div className='flex flex-col items-center justify-center my-20'>
            <h1 className='flex items-center mb-5'>
               <FaExclamationTriangle className='mr-3 text-6xl'/> <span className='font-bold text-6xl'>404</span>
            </h1>
            <h4 className='font-bold'>Sorry, Nothing is here</h4>
            <Link href='/'><span className='text-gray-500 cursor-pointer'>Go back home</span></Link>
         </div>
      </Layout>
   )
}