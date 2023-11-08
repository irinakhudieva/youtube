import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { LuHistory } from 'react-icons/lu';
import { AiOutlineLike } from 'react-icons/ai';
import user from '../assets/img/user.jpg';


const Sidebar = () => {
    
    return (
        <Menu>
            <NavLink to='/'><HiOutlineHome /> Главная</NavLink>
            <div className='user-info'>
                <img src={user} alt='user' />
                <h3>Худиева Ирина</h3>
            </div>
            <NavLink to='/history'><LuHistory /> История просмотров</NavLink>
            <NavLink to='/favorites'><AiOutlineLike /> Понравившиеся</NavLink>
        </Menu>
    )
}

export default Sidebar;
