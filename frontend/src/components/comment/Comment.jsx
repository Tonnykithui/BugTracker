import React from 'react'
import Button from '../button/Button';
import Input from '../input/Input';
import "./comment.css";
import { AiOutlineSend } from 'react-icons/ai';


const btnStyles = {
  borderRadius: '5px',
  padding: '2px'
}

const Comment = () => {
  return (
    <div className='comment'>
      <div className="comment-title">
        <h2 className='font-semibold text-xl'>Comments</h2>
      </div>
      <div className="comment-list">
        <ul>
          {
            ([1, 2, 3, 4, 5, 6, 7, 9, 56]).map(num => {
              return (
                <li className='p-2 rounded-md bg-white m-1'>
                  <div className="comment-details">
                    <h3>Tonny Kithui</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <h4>Tue, 21 2022</h4>
                  </div>
                  <div className="delete-btn">

                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="add-comment bg-blue-500">
        <Input placeholder='Write comment' styles='bg-white rounded-lg p-3 w-4/5 m-1 border-none outline-none' />
        <Button style={btnStyles} children={<AiOutlineSend className='h-10 w-10'/>} />
      </div>
    </div>
  )
}

export default Comment