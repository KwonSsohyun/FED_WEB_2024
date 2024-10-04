import React, { useState } from 'react';

export default function (){

    const [ length, setLength ] = useState(0);

    return <div>
        <p>현재 값: {length}</p>
        <button onClick={() => setLength(length + 1)}>증가</button>
        <button onClick={() => setLength(length - 1)}>감소</button>
    </div>
}