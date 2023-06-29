import React, { useState } from 'react'
import Button from '../button/Button';
import Input from '../input/Input';
import "./comment.css";
import { AiOutlineSend } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, fetchSingleBug } from '../../redux';


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
  console.log('THIS IS THE BUG ID', bugId);

  let handleCommentSubmit;
  if (bugId !== null) {
    handleCommentSubmit = () => {
      // let comments = {
      //   comment
      // }
      console.log('This is the comment',name)
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
                  <div className="comment-details">
                    <h3>{comment.Owner.firstname} {comment.Owner.lastname}</h3>
                    <p>
                      {comment.name}
                    </p>
                    <h4>{comment.submitTime}</h4>
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