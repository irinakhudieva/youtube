import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import ThemeProvider from './provider/ThemeProvider';
import useTheme from './hooks/useTheme';
import cn from 'classnames';
import AppRoutes from './routes/AppRoutes';
import Sidebar from './components/Sidebar';
import { useState } from 'react';


const App = () => {
    // const {isDark} = useTheme();
   

    const [isDark, setIsDark] = useState(false);
 console.log(isDark)
    return (
        <ThemeProvider>
           <div id="outer-container" className={cn('app-style', {
    dark: isDark === true
})}>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
            <Header isDark={isDark} setIsDark={setIsDark}/>
                <div id="page-wrap">
                    <AppRoutes />
                </div>
            </div> 
        </ThemeProvider>    
  )
}

export default App;


// 