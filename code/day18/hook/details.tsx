import React from 'react';
import { useToggle } from '../hook';

// ▶ 디테일(Details) 훅 
interface Props {
    className?: string,
    style?: any,
    children: JSX.Element | JSX.Element[] | string
}

export default function hook(
        tagName: 'div' | 'span'
    ) {

        const { value, Toggle } = useToggle();

        return function(props: Props){
            if(tagName == 'div'){
                return <div className={props.className} style={props.style} onClick={(e)=>{
                            // e.target         : 사용자가 클릭한거
                            // e.currentTarget  : 실제 div해당 요소
                            if(e.target == e.currentTarget) Toggle();
                        }}>
                            <div style={{
                                display: value? 'block' : 'none'
                            }}>{props.children}</div>
                        </div>

            } else if(tagName == 'span'){
                return <span className={props.className} style={props.style} onClick={(e)=>{
                            if(e.target == e.currentTarget) Toggle();
                        }}>
                            <span style={{
                                display: value? 'block' : 'none'
                            }}>{props.children}</span>
                        </span>
            }
        };
    }