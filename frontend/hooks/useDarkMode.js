import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"


export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    const toggleDark = e => {
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleDark];
}