import React from "react";
import { Product } from './ProductTypes';

interface Props {
    products: Product[];
}

export default function ProductGrid({ products }: Props): JSX.Element {
    return <div>
                <h1>ProductGrid 컴포넌트</h1>
                <hr/>
                <div style={styles.grid} >
                    {products.map((products, idx) => (
                        <div key={idx}>
                            <h3>{products.name}</h3>
                            <p>{products.price}원</p>
                            <p>평점 : {products.grade}</p>
                            <img style={styles.img} src={products.img} alt={products.name}></img>
                        </div>
                    ))}
                </div>
            </div>
}

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px'
    },
    img: {
        width: '80%',
        height: 'auto'
    }
};