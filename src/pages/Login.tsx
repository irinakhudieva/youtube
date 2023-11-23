import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import { setUser } from '../redux/auth/authSlice';
import { useAppDispatch } from '../hooks/reduxHooks';

const Login: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                navigate('/');
            })
            .catch(() => <p>Неправильно введен email или пароль</p>)
    }

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h4>Вход</h4>
                <FormLogin title='Войти' handleClick={handleLogin} />
                <p>Ещё нет аккаунта?<NavLink to='/register'> Регистрация</NavLink></p>
            </div>
        </div>
    )
}

export default Login;
