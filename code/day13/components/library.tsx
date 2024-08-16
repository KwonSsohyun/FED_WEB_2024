import React from 'react';

import { Book } from './app';
import BookShow from './book';

interface Props{
    books: Book[];
    color?:string;
}

export default function(props:Props):JSX.Element{
    return <>
        {
            props.books.map(v=><BookShow book={v} color={props.color}/>)
        }
    </>
}