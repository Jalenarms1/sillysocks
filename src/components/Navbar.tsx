import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {BsCart4} from 'react-icons/bs/index'
import {BsFillCartXFill} from 'react-icons/bs/index'
import { useRouter } from 'next/router';
import Cart from './Cart'




export default function Navbar({cart}: {cart: {
  cart: any[];
  clearCart: () => void;
  getTotal: () => any;
  addOne: (id: string) => void;
  subtractOne: (id: string) => void
  addToCart: (id: string, name: string, image: string, description: string, price: number) => void;
  removeFromCart: (id: string) => void;
}}) {

    const router = useRouter();
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(0)
    console.log(windowWidth);
    

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }


    useEffect(() => {
     
      
        setWindowWidth(window.innerWidth)
        const handleResize = () => {
          if (window.innerWidth > 648) {
            setShowMenu(true);
          } else {
            setShowMenu(false);
          }
          setWindowWidth(window.innerWidth)
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup function to remove event listener when component unmounts
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  return (
    <nav className="bg-zinc-900 shadow-sm shadow-zinc-800">
        <div className=" py-3 w-full">
            <div className="flex items-center justify-between w-full px-8 max-sm:px-4 max-sm:flex-col max-sm:items-start max-sm:justify-center">
              <div className="flex justify-between max-sm:w-full">
                <a className="text-3xl font-bold text-yellow-300 hover:text-yellow-600" href="#">Silly Socks</a>
                <button onClick={handleShowMenu} className="bg-transparent border-0 sm:hidden active:shadow-md active:shadow-zinc-700">
                    <Image src={`/images/menu.png`} alt="menu" className="w-10" width={20} height={20} id="show-menu-btn" />
                </button>
              </div>

                
              {<div className="flex max-sm:flex-col max-sm:items-start  items-center justify-center gap-8 font-semibold max-sm:hidden" >
                <Link className={`text-purple-200 ${router.pathname === '/' ? 'border-b border-b-purple-200' : ''} hover:text-purple-400 nav-options max-sm:border-b max-sm:border-zinc-600 w-full`} href={'/'}>
                    Home

                </Link>
                <Link className={`text-purple-200 ${router.pathname === '/shop' ? 'border-b border-b-purple-200' : ''} hover:text-purple-400 nav-options max-sm:border-b max-sm:border-zinc-600 w-full`} href={'/shop'}>
                    Shop

                </Link>
                {/* <a className="text-purple-500 hover:text-purple-700 nav-options max-sm:border-b max-sm:border-zinc-600 w-full" href="#">Cart</a> */}
                {/* <a className="text-purple-200 hover:text-purple-400 nav-options max-sm:border-b max-sm:border-zinc-600 w-full" href="#">Login</a> */}
                {/* <Link className="text-purple-500 flex items-center gap-1 hover:text-purple-700 nav-options max-sm:border-b max-sm:border-zinc-600 w-full" href={'/shop'}>
                    <p>Cart</p>
                    <BsCart4 />

                </Link> */}
              </div>}

                
                
              {<div className="flex max-sm:flex-col max-sm:items-start  items-center justify-center font-semibold gap-5 max-sm:w-full" >
                {windowWidth < 648 && showMenu && <div className='flex flex-col gap-5 w-full mt-2'>
                  <Link className="text-purple-200 hover:text-purple-700 nav-options max-sm:border-b max-sm:border-zinc-600 w-full" href={'/'}>
                      Home

                  </Link>
                  <Link className="text-purple-200 hover:text-purple-700 nav-options max-sm:border-b max-sm:border-zinc-600 w-full" href={'/shop'}>
                      Shop

                  </Link> 
                  {/* <a className="text-purple-200 hover:text-purple-700 nav-options max-sm:border-b max-sm:border-zinc-600 w-full" href="#">Login</a> */}

                </div>}
                <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-400 flex items-center gap-1 max-sm:pt-10 hover:text-yellow-600 nav-options w-full justify-end" >
                    <p>Cart</p>
                    <BsCart4  />

                </button>
              </div>}
                    
            
            </div>
            <div className="md:w-1/4 flex justify-end px-5 z-50">
            {/* Cart Icon Tab
            
            {/* Cart Slideout */}
            {/* <div
                className={`fixed z-10 inset-y-0 right-0 max-w-xs w-full bg-zinc-500 shadow-lg overflow-hidden transform transition duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="p-4">
                    <BsFillCartXFill
                    className="text-5xl text-yellow-300 hover:text-yellow-500 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}/>
                    
                </div>
            </div> */}
              <Cart isOpen={isOpen} setIsOpen={setIsOpen} cart={cart}/>
            </div>
          </div>
    </nav>
  )
}
