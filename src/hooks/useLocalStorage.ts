import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'


export const useLocalStorage = (key: any, initialValue: any) => {
    
    const [value, setValue] = useState(() => {
        let items;
        if(typeof window !== 'undefined' ){
            items = localStorage.getItem(key);

        }
        if(!items || items == "undefined") {
            return initialValue
        }

        if(items) {
            console.log(items)
            const data = JSON.parse(items);

            return data
        }

        if(typeof initialValue === "function"){
            return initialValue();
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export const useSetGetLocalStorage = () => {
    const [cart, setCart] = useLocalStorage('sillysocks-cart', []);
    console.log(cart);
    
    const router = useRouter()

    const addToCart = (id:string, name:string, image:string, description:string, price:number) => {

        const cartCheck = cart.find((item: any) => item.id === id);

        if(cartCheck) {
            addOne(cartCheck.id)

            return;
        }

        setCart((prev: any[]) => {
            return [...prev, {
                id,
                name,
                image,
                description,
                price,
                quantity: 1,
                total: price
            }]
        })
        // router.push(router.pathname)
        
    }

    const removeFromCart = (id: string) => {
        setCart(cart.filter((item: any) => {
            return item.id !== id
        }))

        // router.push(router.pathname)

    }

    const addOne = (id:string) => {
        const productIndex = cart.findIndex((p:any) => p.id === id);
        console.log(id);
        
        // If the product is found, update its quantity and set the new state
        if (productIndex !== -1) {
            const updatedProducts = [...cart];
            updatedProducts[productIndex].quantity++;
            updatedProducts[productIndex].total = updatedProducts[productIndex].quantity * updatedProducts[productIndex].price
            setCart(updatedProducts);
        }
  
    }

    const subtractOne = (id:string) => {
        const productIndex = cart.findIndex((p:any) => p.id === id);
        console.log(id);
        
        // If the product is found, update its quantity and set the new state
        if (productIndex !== -1) {
            const updatedProducts = [...cart];
            if(updatedProducts[productIndex].quantity > 1) {
                updatedProducts[productIndex].quantity--;
                updatedProducts[productIndex].total = updatedProducts[productIndex].quantity * updatedProducts[productIndex].price

                setCart(updatedProducts);

            } else {
                removeFromCart(id)
            }
        }
    }

    const inCart = (id: string) => {
        if(cart.filter((item: any) => item.id === id).length > 0) {
            return true
        } else {
            return false
        }
    }

    const getTotal = () => {
        return cart.reduce((obj:any, acc:any) => acc + obj.total, 0)
    }

    const clearCart = () => {
        setCart([])
    }

    return {addToCart, cart, removeFromCart, setCart, inCart, addOne, subtractOne, getTotal, clearCart}
}