import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {BsCart4} from 'react-icons/bs/index'
import {BsSearch} from 'react-icons/bs/index'
import { useSetGetLocalStorage } from '../../hooks/useLocalStorage'
import { trpc } from '../../utils/trpc'

export default function Shop( {cart}: {cart: {
    cart: any[];
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
}}) {

    const {inCart} = useSetGetLocalStorage()
    const {data, isLoading} = trpc.dbRouter.getProducts.useQuery()

    if(isLoading) {
        return null
    }

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
                    {data?.map((item: any, index: number) => (
                        <div key={index} className="bg-zinc-900 relative pb-20 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
                            <Link href={`/product/${item.id}`} className="w-full h-64">
                                <Image width={250} height={250} className="w-full h-64 object-cover object-center" src={item.image} alt="Product image" />
                            
                            </Link>
                            <div className="p-4 pb-10">
                                <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">{item.name}</h2>
                                <p className={`text-purple-300 text-base`}>{item.description}</p>
                                <div className="mt-2 flex flex-col absolute bottom-5 w-full">
                                    <div className=" pb-5">
                                        <span className="text-purple-300 font-bold text-xl">{item.price}</span>
                                        <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                                    </div>
                                    <button onClick={() => cart.addToCart(item.id, item.name, item.image, item.description, item.price)} className="py-2 px-4 w-1/2 bg-purple-800 hover:bg-purple-700 text-white rounded-lg ">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <Link href={"/product/887"} className="bg-zinc-900 w-3/4 md:w-[30%] xl:w-[22%]  shadow-md shadow-purple-300 rounded-lg overflow-hidden card">
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
                     */}
                    
                    
                    
                
                

                </div>
            </div>
            <div className="py-20 bg-zinc-900"></div>

            <section className="bg-zinc-900 py-20  w-full border-t border-b border-zinc-800">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:flex-wrap md:-mx-4">
                        <div className="md:w-1/2 md:px-4">
                            <h2 className="text-3xl font-extrabold text-zinc-100 mb-4">Shipping</h2>
                            <p className="text-lg text-zinc-100 mb-6">Our shipping policy states that all orders will be charged a flat shipping fee of $3. Shipping times will typically range between 3-5 business days from the time the order is placed. </p>
                            <p className="text-lg text-zinc-100 mb-6">Please note that this timeframe may vary depending on the destination of the shipment and any unforeseen circumstances that may affect the shipping process. We strive to get your order to you as quickly as possible and will provide tracking information once your order has shipped. If you have any questions or concerns about your shipment, please don&apos;t hesitate to contact our customer service team.</p>
                        </div>
                        <div className="md:w-1/2 md:px-4 flex justify-center items-center rounded">
                            <Image width={300} height={300} src="/images/socks-img.png" alt="socks" className="w-2/4 max-sm:w-3/4 max-sm:mt-5 rounded shadow-sm shadow-purple-800" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-12 bg-zinc-900"></div>

            
        </div>
    </>


  )
}
