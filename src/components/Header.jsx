import React from 'react';

import Search from './Search';
import logo from '../assets/img/logo.png';
import { FiSun } from 'react-icons/fi';
import { BsFillMoonFill  } from 'react-icons/bs';
import useTheme from '../hooks/useTheme';
import user from '../assets/img/user.jpg';
import { NavLink } from 'react-router-dom';

const Header = ({isDark, setIsDark}) => {
    // const {isDark, setIsDark} = useTheme();

    return (
        <header className='header'>
            <NavLink to='/'>
                <img className='header__logo' src={logo} alt='logo' />
            </NavLink>
            <Search /> 
            <div className='header__block'>
                <div className='header__toggle-mode' onClick={() => setIsDark(!isDark)}>
                    {isDark ? <FiSun /> : <BsFillMoonFill />}
                </div>
                <img className='header__user-img' src={user} alt='user' />  
            </div>
        </header>
    )
}

export default Header;
