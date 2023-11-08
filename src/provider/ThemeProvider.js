import React, { createContext, useState } from 'react';
import { useMemo } from 'react';

// type TypeSetState<T> = Dispatch<SetStateAction<T>>

// interface IContext {
//     type: 'Light' | 'Dark'
//     setType: TypeSetState<string>
// }

export const ThemeContext = createContext({isDark: false});

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const value = useMemo(() => ({isDark, setIsDark}), [isDark]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

