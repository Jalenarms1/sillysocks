import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillCartXFill } from 'react-icons/bs/index'
import {BsTrash} from 'react-icons/bs/index'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {GrFormAdd} from 'react-icons/gr/index'
import {GrFormSubtract} from 'react-icons/gr/index'
import { useSetGetLocalStorage } from '../hooks/useLocalStorage'

export default function Cart({isOpen, setIsOpen, cart}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, cart: {
    cart: any[];
    getTotal: () => any
    addOne: (id: string) => void;
    subtractOne: (id: string) => void;
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
}}) {
    
    // const {addOne, subtractOne} = useSetGetLocalStorage()
    const createOrder = (data:any, actions:any,) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: cart.cart.reduce((acc, obj) => acc + obj.total, 0).toFixed(2),
                currency_code: "USD",
              },
            },
          ],
        });
    };

    const onApprove = (data:any, actions:any) => {
        return actions.order.capture().then((details:any) => {
            console.log(details);
        });
    };

    
    
  return (
    <PayPalScriptProvider options={{ "client-id": "AVVFypRICMLmrVpBQGLMjvo9A89tye_r-C77D7pNSthQ_JZxWrAjzE1Gwr3vOE4gUVAGtP4fGdjFoIa-", currency: "USD" }}>

        <div
            className={`fixed z-10 inset-y-0 right-0 max-w-xs w-full bg-zinc-600 shadow-lg overflow-hidden transform transition duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <div className="p-4">
                <div className="w-full flex gap-20 items-center">
                    <BsFillCartXFill
                    className="text-5xl text-yellow-400 hover:text-yellow-500 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}/>
                    <p className='text-4xl text-white font-semibold'>Cart</p>
                </div>
                {/* Cart items here */}
                <div className="contain-cart flex flex-col my-10">
                    
                    {cart && cart.cart.map((item: any, index: any) => (
                        <>
                            <div key={index} className="cart-item w-full bg-zinc-300 rounded flex mt-3 h-14">
                                <Image src={item.image} alt={"sock"} width={250} height={250} className="w-16 rounded-l shadow-md shadow-zinc-700"/>
                                <div className="w-full flex justify-between items-center pl-1 pr-2">
                                    <div className="cart-item-desc py-1 px-2 flex flex-col">
                                        <p className='text-md text-zinc-900 font-semibold'>{item.name}</p>
                                        <div className="quantity-wrap flex items-center gap-2">
                                            <p className=''>{item.quantity}</p>
                                            <GrFormAdd onClick={() => cart.addOne(item.id)} className='cursor-pointer shadow-sm shadow-zinc-800 active:bg-zinc-400' />
                                            <GrFormSubtract onClick={() => cart.subtractOne(item.id)} className='cursor-pointer shadow-sm shadow-zinc-800 active:bg-zinc-400' />
                                            <BsTrash onClick={() => cart.removeFromCart(item.id)} className='cursor-pointer text-red-700 active:text-red-300' />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-green-800'>{(item.quantity * item.price).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>

                                </div>
                            </div>
                        
                        </>
                    ))}
                    
                </div>
                {cart.cart.length > 0 && <PayPalButtons createOrder={createOrder} onApprove={onApprove} />} 
            </div>
        </div>
    </PayPalScriptProvider>
  )
}
