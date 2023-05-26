import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { trpc } from '../utils/trpc'

export default function Featured( {cart}: {cart: {
    cart: any[];
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
    addOne: (id: string) => void;
}}) {

  const {data, isLoading} = trpc.dbRouter.getProducts.useQuery()


  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 px-4 mx-auto">
                
    //     {data?.slice(0,4).map((item: any, index: number) => (
    //         <div  key={index} className="bg-zinc-900 relative pb-20 shadow-md shadow-purple-300 hover:shadow-purple-600 rounded-lg overflow-hidden card   w-[90%] mx-auto">
    //             <Link href={`/product/${item.id}`}>
    //                 <Image width={250} height={500} className=" h-64 object-cover " src={item.image} alt="Product image" />
    //             </Link>
    //             <div className="p-4 pb-10">
    //                 <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">{item.name}</h2>
    //                 <p className="text-purple-300 text-base">{item.description}</p>
    //                 <div className="mt-2 flex flex-col absolute bottom-5 w-full">
    //                     <div className=" pb-5">
    //                         <span className="text-purple-300 font-bold text-xl">${item.price.toFixed(2)}</span>
    //                         <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
    //                     </div>
    //                     <button onClick={() => cart.addToCart(item.id, item.name, item.image, item.description, item.price)} className="py-2 px-4 w-[90%] bg-purple-800 hover:bg-purple-700 text-white rounded-lg ">Add to Cart</button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    //     )}
    // </div>
    <div className="sm:w-[80%] max-sm:w-[75%] px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-4 mx-auto">
                {data?.slice(0,4).map((item: any, index: number) => (
                    <div key={index} className="bg-zinc-900 relative pb-20 shadow-md shadow-purple-300 hover:shadow-purple-600 rounded-lg overflow-hidden card w-full">
                    <Link href={`/product/${item.id}`} className="w-full h-72 pb-20">
                        <Image width={250} height={250} className="w-full h-72  object-cover" src={item.image} alt="Product image" />
                    </Link>
                    <div className="p-4 pb-10">
                        <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">{item.name}</h2>
                        <p className={`text-zinc-300 text-base`}>{item.description}</p>
                        <div className="mt-2 flex flex-col absolute bottom-5 w-full">
                        <div className=" pb-5">
                            <span className="text-purple-300 font-bold text-xl">${item.price.toFixed(2)}</span>
                        </div>
                        <button onClick={() => cart.addToCart(item.id, item.name, item.image, item.description, item.price)} className="py-2 px-4 w-1/2 bg-purple-800 hover:bg-purple-700 text-white rounded-lg ">Add to Cart</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
  )
}
