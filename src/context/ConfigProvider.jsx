// Import dependencies

    import { useState } from 'react'

// Import context

    import {ConfigContext} from "./CreateContext.jsx"

const ConfigProvider = ({ children }) => {

    // Default language

        const systemLang = window.navigator.languages[1]

    // Set initial values

        const initialValues = {

            lang: systemLang.toUpperCase(),
            theme: "light",
            hardMode: "false",
            highContrast: "false",

        }

    // Set default wordleConfig values

        const wordleConfig = JSON.parse(localStorage.getItem("wordle-config"))

        wordleConfig == null ? localStorage.setItem("wordle-config", JSON.stringify(initialValues)) : undefined

    // Context vars

        let defaultValues
        
        defaultValues = wordleConfig == null ? initialValues : wordleConfig

        const [lang, setLang] = useState(defaultValues.lang)

        const [hardMode, setHardMode] = useState(defaultValues.hardMode)

        const [theme, setTheme] = useState(defaultValues.theme)

        const [highContrast, setHighContrast] = useState(defaultValues.highContrast)

    return(

        <ConfigContext.Provider value={{lang, hardMode, theme, highContrast, setLang, setHardMode, setTheme, setHighContrast}}>

            {children}
            
        </ConfigContext.Provider>

    )

}

export default ConfigProvider;