import React, { ReactNode, createContext, useState } from 'react';


type ContextType = {
    dark: boolean;
    toggleTheme: () => void;
};
  
type Props = {
    children?: React.ReactNode
};

export const ThemeContext = createContext<ContextType | null>(null);

const ThemeProvider = ({children}: Props): ReactNode => {
    const [dark, setDark] = useState<boolean>(false);

    const toggleTheme = (): void => {
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider value={{dark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

