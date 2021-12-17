import React from 'react'
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const SingleNews = () => {

   const router = useRouter();

   return (
      <Layout>
         <p>Single News</p>
         {router.query.slug}
      </Layout>
   )
}

export default SingleNews;