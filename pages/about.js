import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const about = () => {
   return (
      <div >
         <Layout title='Sport News | About'>
            <p className='text-3xl font-bold'>About Page</p>
            <Link href='/'>Home</Link>
         </Layout>
      </div>
   )
}

export default about
