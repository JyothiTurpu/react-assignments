import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return(
    <div className="userOutput">
      <p className="para1">This is Jyothi Turpu and I am here to study React.</p>
      <p className='para2'>This is {props.userName} first React Assignment</p>
    </div>
  );
}

export default userOutput;