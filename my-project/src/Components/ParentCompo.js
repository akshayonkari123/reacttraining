import React from 'react';
import ChildCompo from './ChildCompo';

const ParentCompo = () => {
    return(

        <div>
          <h4>This is From the the Parent Component </h4>

          <ChildCompo name="Akshay" empId='Emp0028'  ContNo={8951620643}  gender='male' age={24} country='India'/>

        </div>
    );
};

export default ParentCompo;