import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_URL } from '../../config/index';

const add = () => {

   const [values, setValues] = useState({
      name: "",
      detail: "",
      date: "",
      time: ""
   })

   const { name, detail, date, time } = values;

   const postData = async () => {
      const res = await axios.get(`${API_URL}/sports`).then(response => console.log(response));
   }

   postData();
   
   const handleSubmit = (e) => {
      e.preventDefault();
      const emptyFieldCheck = Object.values(values).some(
         (element) => element === ""
      );

      if(emptyFieldCheck) {
         toast.error("Please fill all Input Fields");
      } else {
         
      }
   };

   

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value })
   }

   return (
      <Layout title="Sport News | Add New Sport News">
         <div className='container mx-auto max-w-4xl my-10'>
            <Link href='/news'><a className='text-gray-500'>Go Back</a></Link>
            <h2 className='font-bold text-3xl mt-3'>Add Sport News</h2>
            <ToastContainer/>
            <form onSubmit={handleSubmit} className='my-5'>
               <div className='space-y-5'>
                  <div className='flex justify-between'>
                     <div>
                        <label htmlFor="name">Name</label>
                        <input
                           type="text"
                           name='name'
                           id='name'
                           value={name}
                           onChange={handleInputChange}
                           className='input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                        />
                     </div>

                     <div>
                        <label htmlFor="date">Date</label>
                        <input
                           type="date"
                           name='date'
                           id='date'
                           value={date}
                           onChange={handleInputChange}
                           className='input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                        />
                     </div>
                  </div>

                  <div className='flex flex-col'>
                     <label htmlFor="time">Time</label>
                     <input
                        type="text"
                        name='time'
                        id='time'
                        value={time}
                        onChange={handleInputChange}
                        className='input border border-gray-400 appearance-none rounded inline-block w-56 px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                     />
                  </div>

                  <div>
                     <label htmlFor="detail">Detail</label>
                     <textarea
                        rows={5}
                        type="text"
                        name='detail'
                        id='detal'
                        value={detail}
                        onChange={handleInputChange}
                        className='input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                     />
                  </div>
               </div>

               <input type="submit" value='Add News' className='w-full mt-5 bg-red-500 hover:bg-red-700 cursor-pointer text-white rounded-md p-2' />
            </form>
         </div>
      </Layout>
   )
}

export default add
