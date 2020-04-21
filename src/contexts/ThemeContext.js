import React, {createContext, useState , useEffect} from 'react';

export const ThemeContext = createContext();
export const ColorContext = createContext();
export const IsDarkContext = createContext();
const ThemeContextProvider = (props) => {
    const [isDarkTheme ,setIsDarkTheme] = useState(false);
    const [dark, SetDark] = useState({
    syntax : '#ddd' ,
    ui : '#333',
    bg :'#555',
    mainColor: '#5f9ea0'})

   const toggleTheme  = (e) => {
        setIsDarkTheme(!isDarkTheme);
        console.log('is cliked :')
    }
     
    return ( 
        <ThemeContext.Provider value={ toggleTheme}>
            <ColorContext.Provider value={dark}>
                <IsDarkContext.Provider value={isDarkTheme}>
                    {props.children}
                </IsDarkContext.Provider>
            </ColorContext.Provider>
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;