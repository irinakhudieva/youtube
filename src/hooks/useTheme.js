import { ThemeContext } from '../provider/ThemeProvider';
import { useContext } from 'react';

const useTheme = () => {
    const value = useContext(ThemeContext);

    return value;
}

export default useTheme;
