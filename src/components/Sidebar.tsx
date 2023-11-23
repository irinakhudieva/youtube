import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { LuHistory } from 'react-icons/lu';
import { AiOutlineLike } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import user from '../assets/img/user.jpg';
import { deleteUser } from '../redux/auth/authSlice';
import { useAuth } from '../hooks/useAuth';
import { useAppDispatch } from '../hooks/reduxHooks';
import { Props } from '../types/types';


const Sidebar: React.FC<Props> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {isAuth, email} = useAuth();

    return (
        <Menu>
            <NavLink to='/'><HiOutlineHome /> Главная</NavLink>
                {isAuth && (
                    <div className='user-info'>
                        <img src={user} alt='user' />
                        <h3>{email}</h3>
                    </div>
                )}
            <NavLink to='/history'><LuHistory /> История просмотров</NavLink>
            <NavLink to='/favorites'><AiOutlineLike /> Понравившиеся</NavLink>
            
            <div className='login-info'>
                {isAuth ? (
                    <button 
                        className='login-info__button'
                        onClick={()=> dispatch(deleteUser())}>
                        <BiExit /> Выйти
                    </button>
                ) : (
                    <>
                    <p>Для входа на сайт необходимо использовать личный аккаунт. С ним вы сможете ставить отметки "Нравится", подписываться на каналы, изучать историю просмотров и многое другое.</p>
                        <button 
                            className='login-info__button'
                            onClick={() => navigate('/login')}>
                            <BiExit /> Войти
                        </button>
                    </>
                )}
            </div>
        </Menu>
    )
}

export default Sidebar;
