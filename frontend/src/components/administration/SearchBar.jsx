import React from 'react'
import './Admin.css';
import { BsSearch } from "react-icons/bs"


const SearchBar = () => {
    return (
        <div className='search-bar'>
            <BsSearch className='search-bar-icon' />
            <input type="text" name="" id="" placeholder='Search...' />
            <h2>Go</h2>
        </div>
    )
}

export default SearchBar