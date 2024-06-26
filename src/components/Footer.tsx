import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner shadow-zinc-700  ">
        <div className=" px-7 py-8">
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="w-full  md:w-1/3 mb-4 md:mb-0">
                    <h2 className="text-2xl text-black font-bold mb-2">Contact Us</h2>
                    <a href='mailto:sillysocksandmore@sillysocksandmore.com' className='hover:text-blue-600 text-sm'>sillysocksandmore@sillysocksandmore.com</a>
                    
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h2 className="text-2xl text-black font-bold mb-2">Links</h2>
                    <ul className=" list-inside list-none">
                    <li><a href="#" className='hover:text-blue-600 text-sm'>Home</a></li>
                    <li><a href="#" className='hover:text-blue-600 text-sm'>Shop</a></li>
                    {/* <li><a href="#">Contact Us</a></li> */}
                    </ul>
                </div>
                {/* <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h2 className="text-2xl text-purple-200 font-bold mb-2">Subscribe</h2>
                    <p className="mb-2">Receieve notifications when new products drop</p>
                    <form>
                    <div className="flex items-center">
                        <input type="text" className="bg-gray-800 rounded-l-md py-2 px-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter your email" />
                        <button disabled={true} type="submit" title='functionality in progress' className={`bg-purple-500 ${false ? 'hover:bg-purple-600' : ''} rounded-r-md py-2 px-4 text-gray-100 font-bold`}>Subscribe</button>
                    </div>
                    </form>
                </div> */}
              </div>
              <hr className="border-gray-500 my-8" />
              <div className="text-sm text-gray-500 text-center">
                
              &copy; 2023 Silly Socks and More. All rights reserved.
              </div>

        </div>
    </footer>
  )
}
