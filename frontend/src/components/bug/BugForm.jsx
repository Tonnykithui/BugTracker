import React, { useState } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import './bugForm.css';

const inputStylingCancel = {
    border: 'none',
    outline: 'none',
    padding: '3px',
    borderRadius: '8px',
    background: 'red',
    width: '100%',
    padding: '2px',
    color: 'white'
}

const inputStylingSubmit = {
    background: 'blue',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    padding: '3px',
    width: '100%',
    color: 'white',
    padding: '2px'
}

const BugForm = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedOptions(selectedValues);
    };

    const Submit = () => {
        console.log(selectedOptions);
    }

    return (
        <div className='bg-slate-300 p-2'>
            <h2 className='text-center font-semibold text-2xl'>Create Bug</h2>
            <div className="m-2">
                <label htmlFor="" className='block font-semibold'>Title</label>
                <Input placeholder={`Enter bug title...`} styles='form-input'></Input>
            </div>
            <div className="form-control">
                <label htmlFor="">Bug Description</label>
                <textarea name="" id="" cols="10" rows="3" className='form-input'></textarea>
            </div>
            <div className="form-control">
                <div className="priority-status">
                    <div className="form-priority w-full">
                        <label htmlFor="">Assign Devs</label>
                        <select multiple value={selectedOptions} onChange={handleOptionChange} className='form-input'>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 5">Option 5</option>
                            <option value="Option 6">Option 6</option>
                            <option value="Option 7">Option 7</option>
                        </select>
                    </div>
                    <div className="status">
                        <label htmlFor="">Estimate Time(Hours)</label>
                        <Input placeholder='Enter description' styles='form-input'></Input>
                    </div>
                </div>
            </div>
            <div className="form-control">
                <div className="type-priority-status">
                    <div className="type">
                        <label htmlFor="">Type</label>
                        <select name="" id="" className='form-input'>
                            <option value="Issue">Issue</option>
                            <option value="Bug">Bug</option>
                        </select>
                    </div>
                    <div className="status">
                        <label htmlFor="">Status</label>
                        <select name="" id="" className='form-input'>
                            <option value="Open">Open</option>
                            <option value="Inprogress">Inprogress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="priorities">
                        <label htmlFor="">Priority</label>
                        <select name="" id="" className='form-input'>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button style={inputStylingCancel}>Cancel</Button>
                <Button style={inputStylingSubmit} onClick={() => Submit()}>Add Ticket</Button>
            </div>
        </div>
    )
}

export default BugForm