import React, { useContext } from 'react';
import Context from './context';

interface Props{
    children: JSX.Element | JSX.Element[],
    style: any
}

export default function (props: Props): JSX.Element {

    const theme: {value:string, changer:(value:string)=>void} = useContext(Context);
    // theme.value, theme.changer

    return <div style={{
                backgroundColor: theme.value == 'dark' ? 'black' : 'white',
                color: theme.value == 'light' ? 'black' : 'white'
            }
        }>
        {
            props.children
        }
        {
            theme.value
        }
    </div>
}