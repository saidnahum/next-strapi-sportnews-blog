import Head from 'next/head';
import React from 'react';
import { Footer } from './Footer';
import Header from './Header';
import Hero from './Hero';

const Layout = ({ title, keywords, description, children }) => {
   return (
      <div>
         <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
         </Head>
         <Header/>

         { children }

         <Footer/>
      </div>
   )
};

Layout.defaultProps = {
   title: "Sport News | Find Latest Sport News",
   description: "A website that brings you latest news about sports",
   keywords: "basketball, footnall, tennis, blog, sport, news"
};

export default Layout;
