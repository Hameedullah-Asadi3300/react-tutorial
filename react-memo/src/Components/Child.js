import React from 'react';

function Child({ count }) {
    return <div>The child count is { count }</div>
}

//  Used React.memo
export default React.memo(Child);
