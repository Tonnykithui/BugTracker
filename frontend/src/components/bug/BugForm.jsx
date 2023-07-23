import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import './bugForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { createBugThunk, updateBug } from '../../redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const inputStylingCancel = {
    border: 'none',
    outline: 'none',
    padding: '3px',
    borderRadius: '8px',
    background: 'red',
    width: '100%',
    color: 'white',
};

const inputStylingSubmit = {
    background: 'blue',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    padding: '3px',
    width: '100%',
    color: 'white',
};


const bugType = ['OPEN', 'INPROGRESS', 'CLOSED']
const priorities = ['LOW', 'MEDIUM', 'HIGH'];
const ticketType = ['Bug', 'Issue'];

const BugForm = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setBugDescription] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [estimateTime, setEstimateTime] = useState('');
    const [type, setType] = useState();
    const [status, setStatus] = useState();
    const [priority, setPriority] = useState();

    // const passedType = useSelector((state) => state.createBugReducer.type);
    const users = useSelector((state) => state.usersFetchReducer.users.data);
    const isEditText = useSelector((state) => state.createBugReducer.type);
    const isEdit = (isEditText == 'EDITTICKET') ? true: false;
    const bugToEdit = useSelector(state => state.bugSingleReducer.bug?.data.ticket);

    // useEffect(() => {
    //     setType(passedType);
    // }, []);

    const handleOptionChange = (event) => {
        const selectedValues = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setSelectedOptions(selectedValues);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let ticket = {
            projectId: id,
            title,
            description,
            assignedUsers:selectedOptions,
            estimateTime,
            type,
            status,
            priority,
        };
        if(ticket.title == '' || ticket.description == ''){
            toast('Please provide title and description for the ticket')
        }
        dispatch(createBugThunk(ticket));
        
    };

    const editSubmit = (event) => {
        event.preventDefault();
        let ticket = {
            projectId: id,
            title : title == '' ? bugToEdit.title : title,
            description : description == '' ? bugToEdit.description : description,
            assignedUsers:selectedOptions,
            estimateTime : estimateTime == "" ? bugToEdit.estimateTime : estimateTime,
            type : type == '' ? bugToEdit.type : type,
            status : status == '' ? bugToEdit.status : status,
            priority : priority == '' ? bugToEdit.priority : priority,
        };
        
        let bugId = bugToEdit._id;
        if(bugId != null){
            dispatch(updateBug(bugId,ticket))
        }
    };

    return (
        <div className='bg-slate-300 p-2'>
            <h2 className='text-center font-semibold text-2xl'>{isEdit ? 'Edit' : 'Create Bug'}</h2>
            <div className='m-2'>
                <label htmlFor='' className='block font-semibold'>
                    Title
                </label>
                <Input
                    placeholder= {isEdit ? bugToEdit?.title : 'Enter bug title...'}
                    styles='form-input'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor=''>Bug Description</label>
                <textarea
                    name=''
                    id=''
                    cols='10'
                    rows='3'
                    className='form-input'
                    value={description}
                    placeholder= { isEdit ? bugToEdit?.description : 'Enter bug description'}
                    onChange={(e) => setBugDescription(e.target.value)}
                ></textarea>
            </div>
            <div className='form-control'>
                <div className='priority-status'>
                    <div className='form-priority w-full'>
                        <label htmlFor=''>Assign Devs</label>
                        <select
                            multiple
                            value={selectedOptions}
                            onChange={handleOptionChange}
                            className='form-input'
                        >
                            {
                                users.map((user) => (
                                    <option value={`${user._id}`}>{user.firstname} {user.lastname}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='status'>
                        <label htmlFor=''>Estimate Time(Hours)</label>
                        <Input
                            placeholder= { isEdit ? bugToEdit?.estimateTime :'Enter description'}
                            styles='form-input'
                            value={estimateTime}
                            onChange={(e) => setEstimateTime(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='form-control'>
                <div className='type-priority-status'>
                    <div className='type'>
                        <label htmlFor=''>Type</label>
                        <select
                            name=''
                            id=''
                            className='form-input'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            {
                                ticketType.map((tType) => (
                                    <option value={`${tType}`}>{tType}</option>
                                ))
                            }
                            {/* <option value='Issue'>Issue</option>
                            <option value='Bug'>Bug</option> */}
                        </select>
                    </div>
                    <div className='status'>
                        <label htmlFor=''>Status</label>
                        <select
                            name=''
                            id=''
                            className='form-input'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            {
                                bugType.map((stats) => (
                                    <option value={`${stats}`}>{stats}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='priorities'>
                        <label htmlFor=''>Priority</label>
                        <select
                            name=''
                            id=''
                            className='form-input'
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            {priorities.map((priority) => (
                                <option key={priority} value={priority}>{priority}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <Button style={inputStylingCancel}>Cancel</Button>
                <Button 
                style={inputStylingSubmit} 
                onClick={(e) => 
                    isEdit ? editSubmit(e) : handleSubmit(e)
                }
                >
                    { isEdit ? "Edit Ticket" : "Add Ticket"}
                </Button>
            </div>
        </div>
    );
};

export default BugForm;
