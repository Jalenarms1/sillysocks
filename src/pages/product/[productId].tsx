import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';
import Link from 'next/link';

export default function Product({cart}: {cart: {
    cart: any;
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
    addOne: (id: string) => void;
}}) {

    const router = useRouter();
    const { productId } = router.query;

    const {data, isLoading} = trpc.dbRouter.getProduct.useQuery({id: productId as string})
    const {data: products, isLoading: prodLoading} = trpc.dbRouter.getProducts.useQuery()


    if(isLoading) {
        return null
    }

  return (
    <>
        <div className="flex flex-col md:flex-row max-sm:items-center gap-5 border-t border-zinc-800 px-3">
            <div className="sm:pl-8 pt-8 sm:pb-8">
                <Image width={250} height={250} className="w-96 max-sm:h-96 mx-auto object-cover object-center rounded-lg shadow-sm shadow-purple-900" src={data?.image as string} alt="Product image" />
            </div>
            <div className=" py-8 sm:w-3/4 sm:pr-2 md:w-2/4 lg:w-[40%] w-full">
                <h1 className="text-4xl font-bold text-purple-300 mb-2">{data?.name}</h1>
                <p className="text-lg text-gray-500 mb-4">{data?.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <div className="availability">
                        <p className='text-purple-200'>In Stock</p>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-purple-300">${data?.price.toFixed(2)}</span>
                    </div>
                </div>
                <button onClick={() => cart.addToCart(data?.id as string, data?.name as string, data?.image as string, data?.description as string, data?.price as number)} className="py-2 px-4 w-full bg-purple-800 hover:bg-purple-900 text-white rounded-lg ">Add to Cart</button>
                <button className="py-2 px-4 my-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg ">Buy Now</button>
            </div>
        </div>
        <div className="py-12 bg-zinc-800">
            <div className="px-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-purple-100">Popular</h2>
                <div className="w-full py-4">
                    <div className="flex gap-5 max-sm:flex-col">
                        {products?.slice(0,4).map((item: any, index: number) => (
                            <div key={index} className="bg-zinc-900 relative pb-20 shadow-md shadow-purple-300 hover:shadow-purple-600 rounded-lg overflow-hidden card max-sm:w-72  w-60 max-sm:mx-auto ">
                                <Link href={`/product/${item.id}`} className="w-full h-64">
                                    <Image width={250} height={250} className="w-full h-72 object-cover object-center" src={item.image} alt="Product image" />
                                
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
                </div>
            </div>
        </div>
    </>
  )
}
