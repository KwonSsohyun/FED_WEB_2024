import React from 'react';

interface Results {
    children:JSX.Element[]
}

export default function(props:Results):JSX.Element{
    // {props.children}
    return <div>
        {
            props.children.map(v=><div>추가{v}</div>)
        }
    </div>
}