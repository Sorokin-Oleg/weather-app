import React, {Component} from 'react';
import './Search.scss';

const Search = (props) => {
    return(
        <div className='container-search'>
            <input type="text" placeholder='Enter the name of the city'/>
        </div>
    );
};

export default Search;