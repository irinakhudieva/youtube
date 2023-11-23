import React from 'react';
import spinner from '../assets/img/loader.gif';

const Spinner: React.FC = () => {
    return (
        <div className='spinner'>
            <img src={spinner} alt='spinner' />
        </div>
    )
}

export default Spinner;
