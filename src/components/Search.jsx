import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { VscClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRequest, deleteRequest } from '../redux/request/requestSlise';


const Search = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();
    const {request} = useSelector(state => state.request);

    const navigate = useNavigate();

    const handleChange = (e) => {
      setValue(e.target.value);
    }

    const handleSibmit = (e) => {
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
        </form>

    )
}

export default Search;
