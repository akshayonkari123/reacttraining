import React, { useState } from 'react'

function ReactEvents() {
     const [inputValue, setInputValue] = useState('');
     const [hovered, setHovered] = useState('');


     const handelClick = () => {   
        alert('the onClick event  is Exicuted!')
     }

     const  handleSubmit = (event)  => {
        event.preventDefault(); 
        alert('The Form Got Submitted')
     }

     const handelChange = (event) => {
       setInputValue(event.target.value);
     }

     const handelMouseOver = () => {
   
        setHovered(true);
     }

     const handelMouseOverOut = () => {
       
        setHovered(false);
     }
  return (
    <div>
        <button onClick={handelClick}>I am Button click me</button>
         
         <br />
         <br />
         <br />

        <input type='text' placeholder='Enter your name' value={inputValue.username} onChange={handelChange} /><br></br>
        <input type='text' placeholder='Enter your password' value={inputValue.Password} onChange={handelChange} />

  
         <br />
         <br />
         
        <form onSubmit={handleSubmit}>
         <h1>This is the Simple react form</h1>
            <input type='text'  placeholder='Enter your name' required/><br></br>
            <input type='password'  placeholder='Enter your password' required/><br></br>

            <button type='submit' >Submit</button>
        </form>
          
        <br />
        <div

            onMouseOver={handelMouseOver}
            onMouseOut={handelMouseOverOut}
            style={{padding: '20px',backgroundColor: hovered ? 'blue' :'white' }}
        >
            Hover Me
        </div>
    </div>
  )
}

export default ReactEvents;