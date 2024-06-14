import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { trpc } from '../utils/trpc'

export default function Featured( {cart, sliced}: {cart: {
    cart: any[];
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
    addOne: (id: string) => void;},
    sliced: number
}) {

  const {data, isLoading} = trpc.dbRouter.getProducts.useQuery()

  

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 ">
      {data?.slice(0, 12).map((item, index) => (
        <div
          key={item.id}
          className="bg-white hover:scale-[1.05] transition-all  border p-4 rounded-lg shadow-md hover:shadow-lg  duration-200 cursor-pointer flex flex-col justify-between"
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
          
          <h3 className="text-lg font-semibold mt-8 align-text-bottom inline-block h-16">{item.name}</h3>
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
      ))}
    </div>
  );
}
