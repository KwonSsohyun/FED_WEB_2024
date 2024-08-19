import React from 'react';
import { Product } from './ProductTypes';

// ▶ Props 인터페이스 정의
interface Props {
    products: Product[];
}

// ▶ ProductCard 컴포넌트 정의
//    → 데이터 수신
export default function ProductCard({ products }: Props): JSX.Element {
    return <div>
                <h1>ProductCard 컴포넌트</h1>
                <hr/>
                {products.map((products, idx) => (
                    <div key={idx}>
                        <h3>{products.name}</h3>
                        <p>{products.price}원</p>
                        <p>평점 : {products.grade}</p>
                        <img style={style} src={products.img} alt={products.name}></img>
                    </div>
                ))}
            </div>
}

// ▶ CSS스타일 정의
const style = {
    width: '20%',
    height: 'auto'
};