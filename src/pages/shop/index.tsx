import { type Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React, { type ChangeEvent, useState } from 'react'
import {BsCart4} from 'react-icons/bs/index'
import {BsSearch} from 'react-icons/bs/index'
import { useSetGetLocalStorage } from '../../hooks/useLocalStorage'
import { trpc } from '../../utils/trpc'
import Featured from '../../components/Featured'

export default function Shop( {cart}: {cart: {
    cart: any[];
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
}}) {
    const [searchInput, setSearchInput] = useState<string>("")
    const {inCart} = useSetGetLocalStorage()
    const {data, isLoading} = trpc.dbRouter.getProducts.useQuery()

    if(isLoading) {
        return null
    }
    function onInputUpdate(e: ChangeEvent<HTMLInputElement>){
        setSearchInput(e.target?.value)
    }

    const filterBySearch = (arr: Product[]) => {
        const newArr = arr?.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))

        return newArr
    }

  return (
    <div className=''>
        {/* <Image width={250} height={250} src={'/images/sockslogo.png'} alt={"logo"} className="bg-blend-multiply  max-sm:w-4/5 max-sm:mx-auto m-5 h-48 rounded-lg " /> */}
        <section className="bg-zinc-800  flex max-sm:flex-col justify-between items-center max-sm:p-4 max-sm:items-start pt-16 shadow-inner shadow-zinc-900 border-b border-zinc-700">
            <div className="max-sm:p-1 sm:px-6 ">
                <h2 className="text-purple-200 text-3xl ">Browse our Products</h2>
                <p className="mt-2 text-gray-400 text-md">Find exactly what you are looking for with a quick search.</p>
            </div>
            <div className="p-4 max-sm:p-1 pr-10 w-[30%] max-lg:w-[40%] max-sm:w-full relative">
                <input onChange={onInputUpdate} type="text" placeholder='Search for a product' className='p-2 w-full rounded' />
                <BsSearch className='absolute bottom-4 right-5 md:bottom-7 md:right-12'/>
            </div>
        </section>
        <div className="flex flex-wrap min-w-screen-xl border-t border-zinc-800 mx-auto bg-zinc-800">
            
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 p-4" >
                {filterBySearch(data as Product[])?.map((item: any, index: number) => (
                    <div
                    key={item.id}
                    className="bg-white hover:scale-[1.05] transition-all  border  rounded-lg shadow-md hover:shadow-lg border-zinc-300  duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <Link href={`/product/${item.id}`} passHref>
                      
                      <div className="h-[200px] w-full flex items-center justify-center">
                      <Image
                          src={item.image}
                          alt={item.name}
                          width={250}
                          height={250}
                          className="object-contain max-h-full max-w-full rounded"
                      />
                      </div>
                      
                    </Link>
                    <div className="flex flex-col p-4 border-t border-zinc-300 shadow-inner rounded-lg shadow-zinc-200 bg-zinc-100">
                      <h3 className="text-lg font-semibold  align-text-top inline-block h-16 ">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.price}</p>
                      <button
                          onClick={() =>
                          cart.addToCart(item.id, item.name, item.image, item.description, item.price)
                          }
                          className="bg-green-500 text-white px-4 py-2 rounded text-center"
                      >
                          Add to Cart
                      </button>
          
                    </div>
                  </div>
                ))}
            </div>

            
            <div className="py-20 bg-zinc-900"></div>

            <section className="bg-zinc-900 py-20  w-full border-t border-b border-zinc-800">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:flex-wrap md:-mx-4">
                        <div className="md:w-1/2 md:px-4">
                            <h2 className="text-3xl font-extrabold text-zinc-100 mb-4">Shipping</h2>
                            <p className="text-lg text-zinc-100 mb-6">Our shipping policy states that all orders will be charged a flat shipping fee of $5. Any order with a subtotal over $20 qualifies for free shipping! Shipping times will typically range between 3-5 business days from the time the order is placed. </p>
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
    </div>


  )
}
