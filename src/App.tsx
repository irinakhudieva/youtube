import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Sidebar from './components/Sidebar';
import useTheme from './hooks/useTheme';

const App: React.FC = () => {
    const value = useTheme();

    return (
        <div id="outer-container" className={value?.dark ? 'light-header' : 'header-dark'}>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
            <Header />
            <div id="page-wrap" className={value?.dark ? 'light' : 'dark'}>
                <AppRoutes />
            </div>
        </div>  
    )
}

export default App;
