import React, { useContext } from 'react';
import Context from './context';
import Item from './item';

interface Props {
    datas: any[],
    listStyle: any,
    itemStyle: any
}

export default function (props: Props): JSX.Element {

    const theme: {value:string, changer:(value:string)=>void} = useContext(Context);

    return <div style={props.listStyle} onClick={()=>{
                theme.changer(theme.value == 'dark' ? 'light' : 'dark')
            }}>
                {
                    props.datas.map((v,index) => {
                        return <Item key={index} style={props.itemStyle}>{v}</Item>
                    })
                }
    </div>
}