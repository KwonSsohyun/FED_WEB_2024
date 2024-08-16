import React from 'react';
import BookShow from './book';
import Library from './library';


class Book {
    title: string;
    price: number;

    constructor(title:string, price:number){
        this.title = title;
        this.price = price;
    }
}
export { Book };


export default function():JSX.Element {
    const books: Book[] = [
        new Book("어린왕자", 5000),
        new Book("종이여자", 7500),
        new Book("다빈치 코드", 12000),
        new Book("나미야 잡화점의 기적", 8000),
        new Book("용의자 X의 헌신", 9000),
    ];

    // <BookShow book={books[0]}/>
    return <>
        <Library books={books}/>
        <Library books={books.filter(v=>v.price <= 9000)} color="blue"/>
    </>
}