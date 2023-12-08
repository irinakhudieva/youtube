import React from 'react';
import Search from './Search';
import logo from '../assets/img/logo.png';
import logoWhite from '../assets/img/logoWhite.png';
import { FiSun } from 'react-icons/fi';
import { BsFillMoonFill  } from 'react-icons/bs';
import user from '../assets/img/user.jpg';
import { NavLink } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const Header: React.FC = () => {
    const value = useTheme();

    return (
        
        <header className='header'>
            <NavLink to='/youtube'>
                <img className='header__logo' src={value?.dark ? logo : logoWhite} alt='logo' />
            </NavLink>
            <Search /> 
            <div className='header__block'>
                <div className='header__toggle-mode' onClick={value?.toggleTheme}>
                    {value?.dark ? <BsFillMoonFill /> : <FiSun /> }
                </div>
                <img className='header__user-img' src={user} alt='user' />  
            </div>
        </header>
    )
}

export default Header;
