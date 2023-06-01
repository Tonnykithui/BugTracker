import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../button/Button';
import Input from '../input/Input';
import './project.css';
import { closeBugSuccess } from '../../redux';
import { useDispatch } from 'react-redux';

const cancelBtn = {
    background: 'red',
    padding: '4px',
    borderRadius: '8px',
    color: 'white',
    width: '100%',
};

const addBtn = {
    background: 'blue',
    padding: '4px',
    borderRadius: '8px',
    color: 'white',
    width: '100%',
};

const schema = yup.object().shape({
    name: yup.string(),
    description: yup.string(),
});

const Project = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const dispatch = useDispatch();

    return (
        <>
            <div className='bg-slate-300 p-2'>
                <h2 className='add-project'>Add Project</h2>
                <div className='add-project-wrap'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full p-2'>
                            <label htmlFor='name' className='font-semibold block'>Name</label>
                            <Input styles='form-input' id='name' name='name' ref={register} />
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>
                        <div className='w-full p-2'>
                            <label htmlFor='description' className='font-semibold block'>Description</label>
                            <textarea name="" id="description" className='description' cols="50" rows="5"></textarea>
                            {errors.description && <span>{errors.description.message}</span>}
                        </div>
                        <div className='w-full p-2'>
                            <label htmlFor='' className='font-semibold text-left'>Assign Devs</label>
                            <select name='' id='' multiple className='form-input'>
                                <option value=''>Tonny Kithui</option>
                                {/* <option value=''>Tonny Kithui</option>
                                <option value=''>Tonny Kithui</option>
                                <option value=''>Tonny Kithui</option>
                                <option value=''>Tonny Kithui</option>
                                <option value=''>Tonny Kithui</option>
                                <option value=''>Tonny Kithui</option>
                                <option value=''>Tonny Kithui</option> */}
                            </select>
                        </div>
                        <div className='add-project-btns'>
                            <Button children='Submit' style={addBtn} />
                            <Button children='Cancel' style={cancelBtn} onClick={() => dispatch(closeBugSuccess())}/>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Project;



// import React from 'react'
// import Button from '../button/Button'
// import Input from '../input/Input'
// import './project.css';
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// const cancelBtn = {
//     background: 'red',
//     padding: '4px',
//     borderRadius: '8px',
//     color: 'white',
//     width: '100%'
// }

// const addBtn = {
//     background: 'blue',
//     padding: '4px',
//     borderRadius: '8px',
//     color: 'white',
//     width: '100%'
// }

// const inputStyles = {
//     width: '100%',
//     borderRadius: '8px'
// }

// const schema = z.object({
//     name: z.string(),
//     description: z.string()
// });

// const Project = () => {

//     const { register, handleSubmit, errors } = useForm({
//         resolver: async (data) => {
//             try {
//                 await schema.validate(data);
//                 return {
//                     values: data,
//                     errors: {}
//                 };
//             } catch (error) {
//                 return {
//                     values: {},
//                     errors: error.formErrors.fieldErrors
//                 };
//             }
//         }
//     })

//     const onSubmit = (data) => {
//         console.log(data);
//     };

//     return (
//         <>
//             <div className='bg-slate-300 p-4'>
//                 <h2 className='text-center font-semibold text-2xl'>Project</h2>
//                 <div className='p-4 rounded-lg flex justify-center items-center gap-4'>
//                     <form action="">
//                         <div className='w-full p-2'>
//                             <label htmlFor="name" className='font-semibold block'>Name</label>
//                             {/* <Input styles='form-input' name='name' ref={register}/> */}
//                             <input type="text" id="name" ref={register} name="name" />
//                             {errors.name && <span>{errors.name.message}</span>}
//                         </div>
//                         <div className='w-full p-2'>
//                             <label htmlFor="description" className='font-semibold block'>Description</label>
//                             <Input styles='form-input' id="description" name="description" ref={register}/>
//                             {errors.description && <span>{errors.description.message}</span>}
//                         </div>
//                     </form>
//                     <div className='flex flex-col'>
//                         <label htmlFor="" className='font-semibold text-center'>Assign Devs</label>
//                         <select name="" id="" multiple className='form-input'>
//                             <option value="">Tonny Kithui</option>
//                             <option value="">Tonny Kithui</option>
//                             <option value="">Tonny Kithui</option>
//                             <option value="">Tonny Kithui</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className='flex flex-row'>
//                     <Button style={cancelBtn}>Cancel</Button>
//                     <Button style={addBtn} onClick={() => handleSubmit(onSubmit)}>Add</Button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Project