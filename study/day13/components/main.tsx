import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        → 상품 출력 페이지

        ● 상품 - 이름, 가격, 평점, 이미지(링크)

    [📝출력]
        디자인은 상관없이 상품 모양을 출력하는 ProductCard (컴포넌트)
        여러가지 모든 상품을 grid 5칸으로 출력하는 ProductGrid (컴포넌트)
        상품들 중 5,000원 이하, 50,000원 이상, 전체 3개의 상품목록으로 출력하는 ProductExcel (컴포넌트)

*/
// 🔑Code
import ProductCard from './ProductCard';
import ProductGrid from './ProductGrid';
import ProductExcel from './ProductExcel';

// ▶ 데이터 사용
import products from './products';

root.render(
    <React.Fragment>
        <ProductCard products={products}/>
        <ProductGrid products={products}/>
        <ProductExcel products={products}/>
    </React.Fragment>
);