import React from 'react'
import Button from '../button/Button';
import Card from '../card/Card';
import './Admin.css';
import SearchBar from './SearchBar';


const Administration = () => {
    return (
        <div className='administration'>
            <SearchBar />
            <div className='admin grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 overflow-y-scroll h-screen w-full pb-10'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='absolute top-2 right-6'>
                <Button style={{ background: 'blue', padding: '4px', borderRadius: '8px', color: "white"}}>NEW USER</Button>
            </div>
        </div>
    )
}

export default Administration