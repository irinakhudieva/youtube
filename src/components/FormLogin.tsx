import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormProps = {
    title: string;
    handleClick: (email: string, password: string) => void
}

interface IForm {
    email: string;
    password: string;
}

const FormLogin: React.FC<FormProps> = ({title, handleClick}) => {
    const {register, handleSubmit, formState: {
      errors
    },
    } = useForm<IForm>();

  
    const onSubmit: SubmitHandler<IForm> = (data) => {
        handleClick(data.email, data.password);
    }

    
    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className='form-login'
        >
            <input 
                    {...register('email', {
                        required: 'Необходим email',
                        validate: {
                            maxLength: (v) =>
                              v.length <= 50 || 'Email не должен содержать более 50 символов',
                            matchPattern: (v) =>
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                              'Недопустимый Email'
                          }
                    })}
                    placeholder='Email'
                    type='text'
                    className='form-login__input'
                />
                {errors && <div className='form-login__error'>{errors?.email?.message}</div>}
                <input 
                    {...register('password', {
                        required: 'Необходим пароль',
                        minLength: {
                            value: 5,
                            message: 'Пароль должен содержать не менее 5 символов'
                        }
                    })}
                    placeholder='Пароль'
                    type='password'
                    className='form-login__input'
                />
                {errors && <div className='form-login__error'>{errors?.password?.message}</div>}
                <button className='login-button'>
                  {title}
                </button>
        </form>
    )
}

export default FormLogin;
