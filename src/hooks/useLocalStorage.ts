import {useState, useEffect} from 'react'

export const useLocalStorage = (key: any, initialValue: any) => {
    
    const [value, setValue] = useState(() => {
        const items = localStorage.getItem(key);
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
    return {}
}