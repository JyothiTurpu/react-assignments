import React from 'react';

const userInput = (props) => {
  const inputStyle = {
    margin: "16px auto",
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center',
    fontSize: '3.5vw',  
    width: '800px',
    maxWidth: '90%',
    backgroundColor: 'darkslateblue',
    color: 'blue'
  };
 
  return (
    <div>
      <input style={inputStyle} type="text"  onChange={props.inputChange} value={props.initValue}/>
    </div>
  );
}

export default userInput;