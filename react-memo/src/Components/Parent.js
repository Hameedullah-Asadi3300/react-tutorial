
/*
Using memo will cause react to skip rendering a component if its props have not changed
which can help improving the performance.
How to use memo?
First of all, import the React component to the component file that you do not want it to be rendered.

*/


import React, { useState } from 'react';
import Child from '../Components/Child.js';

function Parent() {
        //  State object for parent component
    const [parentcount, setparentcount] = useState(0);
    //  State object for child component
    const [childcount, setchildcount] = useState(0);

    //  Parent component method 
    const changeParentCount = () => {
        setparentcount(parentcount + 1)     
    }

    //  Child component method
    const changeChildCount = () => {
        setchildcount(childcount + 1)     
    }

    return (
        <div>This is parent component.
            <h1>Parent count is: {parentcount}</h1>
            
            {/* nested child component */}
            <Child count={childcount} />
            <button onClick={changeParentCount}>Increment parent count</button>         
            <button onClick={changeChildCount}>Increment child count</button>

    </div>
    )
}
export default Parent;