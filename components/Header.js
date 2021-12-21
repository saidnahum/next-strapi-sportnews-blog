import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const navLinks = [
   { title: 'News', path: '/news' },
   { title: 'About', path: '/about' }
]


const Header = () => {

   const router = useRouter();

   return (
      <header className=' py-5 shadow-md'>
         <div className='container mx-auto flex justify-between'>
            <div>
               <p className='text-red-700 text-lg font-bold hover:text-red-600'><Link href='/'>SPORT NEWS</Link></p>
            </div>
            <nav>
               <ul className='flex space-x-5'>
                  {
                     navLinks.map((link, index) => (
                        <li key={index}>
                           <Link href={link.path} passHref>
                              <a className={`text-gray-600 hover:text-gray-900 ${router.pathname === link.path && 'border-b-2 border-red-700'}`}>
                                 {link.title}
                              </a>
                           </Link>
                        </li>
                     ))
                  }
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Header
