import React from 'react'
import './Admin.css';
import { BsSearch } from "react-icons/bs"


const SearchBar = ({ value, onchange }) => {
    return (
        <div className='search-bar'>
            <BsSearch className='search-bar-icon' />
            <input type="text" name="" id="" placeholder='Search...' value={value} onChange={onchange}/>
            <h2>Go</h2>
        </div>
    )
}

export default SearchBar