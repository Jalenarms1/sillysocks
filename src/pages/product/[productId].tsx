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
        <div className="flex flex-col md:flex-row gap-5 border-t border-zinc-800">
            <div className=" pl-8 py-8">
                <Image width={250} height={250} className="w-96 mx-auto object-cover object-center rounded-lg shadow-sm shadow-purple-900" src={data?.image as string} alt="Product image" />
            </div>
            <div className="lg:w-2/5 md:w-1/2 py-8 pr-8">
                <h1 className="text-4xl font-bold text-purple-300 mb-2">{data?.name}</h1>
                <p className="text-lg text-gray-500 mb-4">{data?.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <div className="availability">
                        <p className='text-purple-200'>In Stock</p>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-purple-300">{data?.price}</span>
                        <span className="text-base text-gray-600 ml-2 line-through">$69.99</span>
                    </div>
                </div>
                <button onClick={() => cart.addToCart(data?.id)} className="py-2 px-4 w-full bg-purple-800 hover:bg-purple-900 text-white rounded-lg ">Add to Cart</button>
                <button className="py-2 px-4 my-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg ">Buy Now</button>
            </div>
        </div>
        <div className="py-12 bg-zinc-800">
            <div className="px-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-purple-100">Related Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {/* <a href="#" className="group">
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
                </a> */}
                    {products?.slice(0,4).map((item: any, index: number) => (
                        <div  key={index} className="bg-zinc-900 relative pb-20 shadow-md shadow-purple-300 hover:shadow-purple-600 rounded-lg overflow-hidden card  max-sm:w-3/4 max-sm:mx-auto">
                            <Link href={`/product/${item.id}`}>
                                <Image width={200} height={200} className="w-full h-64 object-cover object-center" src={item.image} alt="Product image" />
                            </Link>
                            <div className="p-4 pb-10">
                                <h2 className="text-purple-300 font-bold text-2xl tracking-tight mb-2">{item.name}</h2>
                                <p className="text-purple-300 text-base">{item.description}</p>
                                <div className="mt-2 flex flex-col absolute bottom-5 w-full">
                                    <div className=" pb-5">
                                        <span className="text-purple-300 font-bold text-xl">{item.price}</span>
                                        <span className="text-gray-600 text-sm ml-2 line-through">$69.99</span>
                                    </div>
                                    <button onClick={() => cart.addToCart(item.id, item.name, item.image, item.description, item.price)} className="py-2 px-4 w-1/2 bg-purple-800 hover:bg-purple-700 text-white rounded-lg ">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    </>
  )
}
