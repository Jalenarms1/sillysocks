import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillCartXFill } from 'react-icons/bs/index'
import {BsTrash} from 'react-icons/bs/index'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {GrFormAdd} from 'react-icons/gr/index'
import {GrFormSubtract} from 'react-icons/gr/index'
import { useSetGetLocalStorage } from '../hooks/useLocalStorage'
import { trpc } from '../utils/trpc'
import dynamic from 'next/dynamic'



export default function Cart({isOpen, setIsOpen, cart}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, cart: {
    cart: any[];
    getTotal: () => any;
    clearCart: () => void;
    addOne: (id: string) => void;
    subtractOne: (id: string) => void;
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
}}) {

    const sendMail = trpc.dbRouter.sendMail.useMutation()
    const onSubmit = trpc.dbRouter.submittedOrder.useMutation()
    
    // const {addOne, subtractOne} = useSetGetLocalStorage()
    const createOrder = (data:any, actions:any,) => {
        console.log(cart.getTotal());
        
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: JSON.parse(localStorage.getItem("sillysocks-cart") as string).reduce((acc:any, obj:any) => acc + obj.total, 0),
                currency_code: "USD",
              },
            },
          ],
        });
    };

    const onApprove = (data:any, actions:any) => {
        return actions.order.capture().then((details:any) => {
            // sendMail.mutate({id: "232342309"})
            // order id - details.id
            // order email address - details.payer.email_address
            // order name - details.payer.name.given_name
            console.log(`${details.purchase_units[0].shipping.address.address_line_1} ${details.purchase_units[0].shipping.address.admin_area_2
            } ${details.purchase_units[0].shipping.address.admin_area_1
            } ${details.purchase_units[0].shipping.address.country_code
            } ${details.purchase_units[0].shipping.address.postal_code
            } `);
            onSubmit.mutate({id: details.id, total: parseFloat(details.purchase_units[0].amount.value), products: JSON.parse(localStorage.getItem("sillysocks-cart") as string), shippingAddress: `${details.purchase_units[0].shipping.address.address_line_1} ${details.purchase_units[0].shipping.address.admin_area_2
            } ${details.purchase_units[0].shipping.address.admin_area_1
            } ${details.purchase_units[0].shipping.address.country_code
            } ${details.purchase_units[0].shipping.address.postal_code
            } `, emailAddress: details.payer.email_address, customerName: details.payer.name.given_name})
            sendMail.mutate({emailAddress: `${details.payer.email_address}`, subject: `Payment confirmation`, message: `${details.payer.name.given_name}, Thank you for your payment of $${parseFloat(details.purchase_units[0].amount.value).toFixed(2)}. Order ${details.id} has been submitted and will get to you within 5-7 business days, excluding external factors that may cause a delay. If there any issues with your order please contact us at support@sillysocksandmore.com.`})
            console.log(details);
            cart.clearCart()
            
        });
    };

    
    
  return (
    <PayPalScriptProvider options={{ "client-id": "Aczc1MR7LF7SEwhA9s1hA1YPkWHaKexvxYWPsM7Q2vyIhCRkyTjvCbdATq2e7qETavmZ154pms3ySUug", currency: "USD" }}>

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
                    
                    {typeof window !== 'undefined' && cart && cart.cart.map((item: any, index: any) => (
                    
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
                        
                        
                    ))}
                    {cart.cart.length > 0 && <div className='w-full flex justify-end pt-5'>
                        <p className="text-md text-white">Total: ${cart.getTotal().toFixed(2)}</p>
                    </div>}
                    
                </div>
                {cart && cart.cart.length > 0 && <PayPalButtons createOrder={createOrder} onApprove={onApprove} />} 
            </div>
        </div>
    </PayPalScriptProvider>
  )
}
