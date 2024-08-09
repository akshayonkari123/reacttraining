import React from "react";


const ChildCompo = (props) => {
    return(
        <div>
         <p>This is the Child Component Trying to send the data : {props.name}</p>

         <p>Your Employee ID is : {props.empId}</p>

         <p>Your Contact No is : {props.ContNo}</p>

         <p>Your Gender is : {props.gender}</p>

         <p>Your Age is : {props.age}</p>

         <p>Your Country is : {props.country}</p>


        </div>
    );
};
export default ChildCompo;