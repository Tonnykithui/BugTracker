import React, { useState } from 'react'
import Button from '../button/Button';
import Input from '../input/Input';
import "./comment.css";
import { AiOutlineSend } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, fetchSingleBug } from '../../redux';
import jwt_decode from 'jwt-decode';

const btnStyles = {
  borderRadius: '5px',
  padding: '2px'
}

const Comment = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const bugComments = useSelector(state => state.bugSingleReducer.bug?.data.comments);
  const checkComments = useSelector(state => state.bugSingleReducer.bug);
  const bugId = useSelector(state => state.bugSingleReducer.bug?.data.ticket._id);

  let token = localStorage.getItem('token');
  let decodedDetails = jwt_decode(token);

  let handleCommentSubmit;
  if (bugId !== null) {
    handleCommentSubmit = () => {
      setName('')
      dispatch(createComment(bugId, name));
      dispatch(fetchSingleBug(bugId))
    }
  }

  return (
    <div className='comment'>
      <div className="comment-title">
        <h2 className='font-semibold text-xl'>Comments</h2>
      </div>
      <div className="comment-list">
        <ul>
          {
            checkComments ? (
              bugComments.map((comment) => (
                <li className='p-2 rounded-md bg-white m-1'>
                  <div>
                    <div className="ownerNdelete">
                      <h3>{comment.Owner.firstname} {comment.Owner.lastname}</h3>
                      {
                        decodedDetails.sub === comment.Owner._id ?
                          <span className='text-red-600 font-semibold text-lg'>X</span> :
                          ''
                      }
                    </div>
                    <p>
                      {comment.name}
                    </p>
                    <h4>{comment.submitTime.slice(0, 10)}</h4>
                  </div>
                  <div className="delete-btn">
                  </div>
                </li>
              ))) :
              (
                <>
                  <p>NO COMMENTS</p>
                </>
              )
          }
        </ul>
      </div>
      <div className="add-comment">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Write comment'
          styles='bg-white rounded-lg p-3 w-4/5 m-1 border-none outline-none' />
        <Button
          onClick={handleCommentSubmit}
          style={btnStyles}
          children={<AiOutlineSend className='h-10 w-10' />} />
      </div>
    </div>
  )
}

export default Comment