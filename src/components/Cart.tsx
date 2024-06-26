import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillCartXFill } from 'react-icons/bs/index'
import {BsTrash} from 'react-icons/bs/index'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {GrFormAdd} from 'react-icons/gr/index'
import {GrFormSubtract} from 'react-icons/gr/index'
import { trpc } from '../utils/trpc'



export default function Cart({isOpen, setIsOpen, cart}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, cart: {
    cart: any[];
    getTotal: () => any;
    clearCart: () => void;
    addOne: (id: string) => void;
    subtractOne: (id: string) => void;
    addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
    removeFromCart: (id: string) => void;
}}) {
    const [zipCode, setZipCode] = useState('85043');
    console.log(zipCode);

    const shippingFee = 5
    const freeShippingThreshold = 20
    
    const sendMail = trpc.dbRouter.sendMail.useMutation()
    const onSubmit = trpc.dbRouter.submittedOrder.useMutation()
    // const {data} = trpc.dbRouter.getSalesTax.useQuery({zipCode})
    // const [taxRate, setTaxRate] = useState(data?.rate?.combined_rate);
    const [taxRate, setTaxRate] = useState(.088);
    console.log(taxRate);

    
    // const {addOne, subtractOne} = useSetGetLocalStorage()
    const createOrder = (data:any, actions:any,) => {
        console.log(cart.getTotal());
        const cartTotal = JSON.parse(localStorage.getItem("sillysocks-cart") as string).reduce((acc:any, obj:any) => acc + obj.total, 0);
        const totalWithTax = cartTotal + (cartTotal * (taxRate ?? 0.088)) + (cart.getTotal() >= freeShippingThreshold ? 0 : shippingFee);
        console.log("incl", totalWithTax);
        
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalWithTax.toFixed(2),
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

    // useEffect(() => {
    //     if (data && data.rate && data.rate.combined_rate) {
    //       setTaxRate(data.rate.combined_rate);
    //     }
    // }, [data]);

    useEffect(() => {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(
        //       (position) => {
        //         const { latitude, longitude } = position.coords;
        //         fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        //           .then(response => response.json())
        //           .then(data => {
        //             setZipCode(data.postcode);
        //           })
        //           .catch(error => console.error(error));
        //       },
        //       (error) => console.error(error)
        //     );
        // } 
    }, [])
    
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_KEY as string, currency: "USD" }}>

        <div
            className={`fixed z-10 overflow-y-auto scrollbar-none inset-y-0 right-0 max-w-xs w-full bg-zinc-900 border-l border-zinc-800 shadow-lg transform transition duration-300 ease-in-out ${
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
                <div className="contain-cart flex flex-col items-start gap-4 mt-10 mb-5">
                    
                    {typeof window !== 'undefined' && cart && cart.cart.map((item: any, index: any) => (
                    
                        <div key={index} className="cart-item w-full bg-zinc-300 rounded flex">
                            <Image src={item.image} alt={"sock"} width={250} height={250} className="w-16 h-16 rounded-l shadow-md shadow-zinc-700"/>
                            <div className="w-full flex justify-between items-start p-2  gap-2">
                                <div className="cart-item-desc flex flex-col justify-between h-full">
                                    <p className='text-sm text-zinc-900 font-semibold'>{item.name}</p>
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
                    {cart.cart.length > 0 && <div className='w-full flex flex-col items-end pt-5 gap-3'>
                        {taxRate && <p className="text-md text-white">Subtotal: ${cart.getTotal().toFixed(2)}</p>}
                        {taxRate && <p className="text-md text-white">Tax: ${(cart.getTotal() * taxRate).toFixed(2)}</p>}
                        {taxRate && <p className="text-md text-white">Shipping: ${cart.getTotal() >= freeShippingThreshold ? 0 : shippingFee.toFixed(2)}</p>}
                        {taxRate && <p className="text-lg text-green-500"><span className='font-bold text-white'>Total:</span> ${((cart.getTotal() + (cart.getTotal() * taxRate)) + (cart.getTotal() >= freeShippingThreshold ? 0 : shippingFee)).toFixed(2)}</p>}
                    </div>}
                    {cart && cart.cart.length > 0 && <div className="flex justify-end">
                        <p className="text-sm text-slate-300 mt-2">Free shipping with a subtotal over ${freeShippingThreshold}!</p>

                    </div>}
                    
                </div>
                {cart && cart.cart.length > 0 ? <PayPalButtons createOrder={createOrder} onApprove={onApprove} /> : <p className='text-white text-center'>No items in your cart :(</p>} 
            </div>
        </div>
    </PayPalScriptProvider>
  )
}
