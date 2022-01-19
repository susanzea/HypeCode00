import { useEffect, useState } from 'react';

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)

        //if the value exists in localStorage, parse and return it
        if (jsonValue != null) return JSON.parse(jsonValue)

        //if it does not exist, just use the iitial value
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}