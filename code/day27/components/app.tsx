import React, { Fragment, useState } from 'react';

export default function (){

    const [ length, lengthC ] = useState(10);

    return <Fragment>
        <button onClick={()=>lengthC(length+1)}>증가</button>
       <table>
            <tbody>
                {
                    Array.from({ length: 10 }).map((v,idx) => (
                        <tr key={idx}>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                            <td>데이터</td>
                        </tr>
                    ))
                }
            </tbody>
       </table>
    </Fragment>
}