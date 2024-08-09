import React , {useState} from "react";


const ReactuseStateEx = () => {
    const [count , setCount] = useState(0);


    return(
        <>
       
        <p>Count: {count}</p>
       
       
        <button onClick = {() => setCount(count+1)}>Increment</button>

        &nbsp;

        <button onClick = {() => setCount(count-1)}>Decrement</button>
       
        </>
    )
}
export default ReactuseStateEx;