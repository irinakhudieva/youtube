import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { VscClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { addRequest, deleteRequest } from '../redux/request/requestSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';


const Search: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const dispatch = useAppDispatch();
    const {request} = useAppSelector(state => state.request);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }

    const handleSibmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if(!value) return;
      
      navigate(`/search/?q=${value}`);

      dispatch(addRequest(value));

      setValue('');
    }

    return (
        <form className='search' onSubmit={handleSibmit}>
            <input 
                className='search-input'
                type='text'
                value={value}
                onChange={handleChange}
                placeholder='Введите запрос'
            />
            <button 
                className='search-btn'
                type='submit'
            >
                    <GoSearch />
            </button>
            {value && (
                <ul className={request.length ? 'request-block' : ''}>
                    {request.map((r, i) => 
                        <li key={i} className='request-block__item'>
                            <p><GoSearch /> <span onClick={() => setValue(r)}>{r}</span></p>
                            <VscClose onClick={() => dispatch(deleteRequest(r))}/>
                        </li>
                    )}
                </ul>
            )}
            {value && (
                <svg
                    onClick={() => setValue('')}
                    className='clear-value'
                    viewBox="0 0 20 20">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            )}  
        </form>
    )
}

export default Search;
