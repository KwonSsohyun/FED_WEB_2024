import React from 'react';
import { Book } from './app';

interface Props{
    book: Book;
    color?: string;
}

export default function(props:Props): JSX.Element{
    return <div style={{
        backgroundColor: props.color ? props.color : "red",
        width:"200px",
        height:"60px"
    }}>
        <div>{props.book.title}</div>
        <div>{props.book.price}원</div>
    </div>
}