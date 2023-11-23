import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import FormLogin from '../components/FormLogin';
import { setUser } from '../redux/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';

const Register: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h4>Создание аккаунта</h4>
                <FormLogin title='Создать' handleClick={handleRegister} />
                <p>Уже есть аккаунт? <NavLink to='/login'>Войти</NavLink></p>
            </div>
            
        </div>  
    )
}

export default Register;
