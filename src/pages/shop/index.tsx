import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {BsCart4} from 'react-icons/bs/index'
import {BsSearch} from 'react-icons/bs/index'

export default function Shop() {

  return (
    <>
        <section className="bg-zinc-900 py-4 border-t border-zinc-800 flex max-sm:flex-col justify-between items-center pt-20 max-sm:p-4">
            <div className=" px-4 sm:px-6 lg:px-8">
                <h2 className="text-purple-200 text-xl ">Shop for Socks and More</h2>
                <p className="mt-2 text-gray-600 text-sm">Find exactly what you are looking for with a quick search.</p>
            </div>
            <div className="p-4 pr-10 w-1/4 max-sm:w-full relative">
                <input type="text" placeholder='Search for a product' className='p-2 w-full rounded' />
                <BsSearch className='absolute bottom-7 right-12'/>
            </div>
        </section>
        <div className="flex flex-wrap min-w-screen-xl border-t border-zinc-800 mx-auto">
            
            <div className="w-full p-4">
                <div className="w-full flex max-sm:justify-center mx-auto flex-wrap gap-8 xl:gap-8 p-5">
                    <Link href={"/product/887"} className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </Link>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                        <Image width={250} height={250} className="w-full h-64 object-cover object-center" src="/images/model-sock.png" alt="Product image" />
                        <div className="p-4">
                            <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">Product Title</h2>
                            <p className="text-purple-300 text-base">Product description goes here. This is a longer description for the product, with more details and specifications.</p>
                            <div className="mt-3">
                                <span className="text-purple-300 font-bold text-xl">$49.99</span>
                                <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                            </div>
                            <div className="mt-2">
                                <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-gray-700">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                
                

                </div>
            </div>

            
        </div>
    </>


  )
}
