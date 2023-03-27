import React from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import './project.css';

const cancelBtn = {
    background: 'red',
    padding: '4px',
    borderRadius: '8px',
    color: 'white',
    width: '100%'
}

const addBtn = {
    background: 'blue',
    padding: '4px',
    borderRadius: '8px',
    color: 'white',
    width: '100%'
}

const inputStyles = {
    width: '100%',
    borderRadius: '8px'
}

const Project = () => {
    return (
        <>
            <div className='bg-slate-300 p-4'>
                <h2 className='text-center font-semibold text-2xl'>Project</h2>
                <div className='p-4 rounded-lg flex justify-center items-center gap-4'>
                    <form action="">
                        <div className='w-full p-2'>
                            <label htmlFor="" className='font-semibold block'>Name</label>
                            <Input styles='form-input' />
                        </div>
                        <div className='w-full p-2'>
                            <label htmlFor="" className='font-semibold block'>Description</label>
                            <Input styles='form-input' />
                        </div>
                    </form>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-semibold text-center'>Assign Devs</label>
                        <select name="" id="" multiple className='form-input'>
                            <option value="">Tonny Kithui</option>
                            <option value="">Tonny Kithui</option>
                            <option value="">Tonny Kithui</option>
                            <option value="">Tonny Kithui</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Button style={cancelBtn}>Cancel</Button>
                    <Button style={addBtn}>Add</Button>
                </div>
            </div>
        </>
    )
}

export default Project