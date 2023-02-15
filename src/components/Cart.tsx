import Image from 'next/image'
import React from 'react'
import { BsFillCartXFill } from 'react-icons/bs/index'

import {GrFormAdd} from 'react-icons/gr/index'
import {GrFormSubtract} from 'react-icons/gr/index'

export default function Cart({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
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
            <div className="contain-cart flex flex-col mt-10">
                <div className="cart-item w-full bg-zinc-300 rounded flex">
                    <Image src={"/images/model-sock.png"} alt={"sock"} width={250} height={250} className="w-16 rounded-l shadow-md shadow-zinc-700"/>
                    <div className="cart-item-desc py-1 px-2 flex flex-col">
                        <p className='text-sm'>Test Sock Name</p>
                        <div className="quantity-wrap flex items-center gap-2">
                            <p>1</p>
                            <GrFormAdd className='cursor-pointer shadow-sm shadow-zinc-800 active:bg-zinc-400' />
                            <GrFormSubtract className='cursor-pointer shadow-sm shadow-zinc-800 active:bg-zinc-400' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
