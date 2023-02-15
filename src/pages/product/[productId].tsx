import Image from 'next/image'
import React from 'react'

export default function Product() {
  return (
    <>
        <div className="flex flex-col md:flex-row gap-5 border-t border-zinc-800">
            <div className=" pl-8 py-8">
                <Image width={250} height={250} className="w-96 mx-auto object-cover object-center rounded-lg shadow-sm shadow-purple-900" src="/images/model-sock.png" alt="Product image" />
            </div>
            <div className="sm:w-1/2 py-8 pr-8">
                <h1 className="text-4xl font-bold text-purple-300 mb-2">Product Title</h1>
                <p className="text-lg text-gray-500 mb-4">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                <div className="flex justify-between items-center mb-4">
                    <div className="availability">
                        <p className='text-purple-200'>In Stock</p>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-purple-300">$49.99</span>
                        <span className="text-base text-gray-600 ml-2 line-through">$69.99</span>
                    </div>
                </div>
                <button className="py-2 px-4 w-full bg-purple-800 hover:bg-purple-900 text-white rounded-lg ">Add to Cart</button>
                <button className="py-2 px-4 my-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg ">Buy Now</button>
            </div>
        </div>
        <div className="py-12 bg-yellow-400">
            <div className="px-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-purple-800">Related Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                <a href="#" className="group">
                    <div className="bg-zinc-900 shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                    <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-400 mb-2">Product Title</h3>
                        <p className="text-gray-600 text-base">Product description goes here.</p>
                        <span className="text-purple-300 font-bold text-xl">$49.99</span>
                    </div>
                    </div>
                </a>
                <a href="#" className="group">
                    <div className="bg-zinc-900 shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                    <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-400 mb-2">Product Title</h3>
                        <p className="text-gray-600 text-base">Product description goes here.</p>
                        <span className="text-purple-300 font-bold text-xl">$49.99</span>
                    </div>
                    </div>
                </a>
                <a href="#" className="group">
                    <div className="bg-zinc-900 shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                    <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-400 mb-2">Product Title</h3>
                        <p className="text-gray-600 text-base">Product description goes here.</p>
                        <span className="text-purple-300 font-bold text-xl">$49.99</span>
                    </div>
                    </div>
                </a>
                <a href="#" className="group">
                    <div className="bg-zinc-900 shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                    <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-400 mb-2">Product Title</h3>
                        <p className="text-gray-600 text-base">Product description goes here.</p>
                        <span className="text-purple-300 font-bold text-xl">$49.99</span>
                    </div>
                    </div>
                </a>
                
                </div>
            </div>
        </div>
    </>
  )
}
