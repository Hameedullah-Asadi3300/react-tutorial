
/*
Using memo will cause react to skip rendering a component if its props have not changed
which can help improving the performance.
How to use memo?
First of all, import the React component to the component file that you do not want it to be rendered like so:
        import React from 'react';
Then while exporting the component, do so:
        export default React.memo(Child);
This memo will actually memorize the value of the component, and will not be rendered in case the parent
component renders.
This is specially useful shen there are tens or hundreds of components, and rendering all the child components
can severly affect the app performance.
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