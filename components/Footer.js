import React from 'react'

export const Footer = () => {
   return (
      <footer className='flex justify-center items-center my-10'>
         <span>Copyright &copy; PixelWeb {new Date().getFullYear()}</span>
      </footer>
   )
}
