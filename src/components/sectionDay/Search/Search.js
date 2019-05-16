import React, {Component} from 'react';
import './Search.scss';

const Search = (props) => {    
    // Default true English
    const plaseholder = props.lang ? 'Enter the name of the city': 'Введите название города';
    return(
        <div className='container-search'>
            <input type="text" placeholder={plaseholder}/>
            <button>➜</button>
        </div>
    );
};

export default Search;