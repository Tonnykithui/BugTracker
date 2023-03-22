import React from 'react';
import Comment from '../comment/Comment';
import './bugDetails.css';


const BugDetails = () => {
  return (
    <div className='bug-details-page'>
      <div className="left-page">
        <div className="title">
          this is the title
        </div>
        <div className="statuses">
          <ul>
            <li>STATUS</li>
            <li>ASSIGNEE</li>
            <li>REPORT DATE</li>
            <li>LABEL</li>
          </ul>
        </div>
        <div className="todo-activity">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptate eius tenetur laborum, cupiditate debitis error quasi dolorem quaerat officia molestiae, autem inventore ratione distinctio similique deserunt unde exercitationem impedit!
            Recusandae tenetur, necessitatibus nesciunt in nobis asperiores id dolorem hic tempore nisi, officiis quos, rerum ut omnis! Incidunt, reiciendis quia ad consequuntur asperiores sapiente quos neque tenetur, aliquid deleniti labore?
            Sed nulla amet tenetur veritatis ab exercitationem fuga cupiditate, quasi quae quidem quos asperiores dignissimos eaque doloribus voluptatem, doloremque quisquam nemo aspernatur optio temporibus omnis adipisci laborum ducimus voluptate! Quo.
            Molestiae natus dolorem quae iste perferendis neque placeat illum impedit asperiores reprehedelectus accusantium facere nemo quam veniam placeat impedit. Assumenda dignissimos architecto eveniet? Aliquid nisi veniam maiores corrupti quis? Similique at modi ratione voluptates itaque. Corporis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptate eius tenetur laborum, cupiditate debitis error quasi dolorem quaerat officia molestiae, autem inventore ratione distinctio similique deserunt unde exercitationem impedit!
            Recusandae tenetur, necessitatibus nes
          </p>
        </div>
      </div>
      <div className="right-page">
        <Comment />
      </div>
    </div>
  )
}

export default BugDetails