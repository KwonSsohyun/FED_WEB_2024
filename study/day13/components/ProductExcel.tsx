import React from "react";
import { Product } from './ProductTypes';

interface Props {
    products: Product[];
}

export default function ProductExcel({ products }: Props): JSX.Element {

    // ▶ 가격 필터링
    //    → 5,000원 이하 상품
    const under5000 = products.filter(products => products.price <= 5000);

    //    → 50,000원 이상 상품
    const over50000 = products.filter(products => products.price >= 50000);

    //    → 전체 상품
    const allProducts = products;

    // ▷ 조건부 렌더링
    //    {under5000.length > 0 ? (...) : (...)}

    return <div>
                <h1>ProductExcel 컴포넌트</h1>
                <hr/>

                <section>
                    <h2>5,000원 이하 상품</h2>
                    { under5000.length > 0 ? 
                        (under5000.map((under5000Products, idx) => (
                            <div key={idx}>
                                <h3>{under5000Products.name}</h3>
                                <p>{under5000Products.price}원</p>
                                <p>평점 : {under5000Products.grade}</p>
                                <img style={styles.img} src={under5000Products.img} alt={under5000Products.name}></img>   
                            </div>                     
                        ))) 
                        : (<p>5,000원 이하 상품이 없습니다.</p>)
                    }
                </section>

                <section>
                    <h2>50,000원 이상 상품</h2>
                    { over50000.length > 0 ? 
                        (over50000.map((over50000Products, idx) => (
                            <div key={idx}>
                                <h3>{over50000Products.name}</h3>
                                <p>{over50000Products.price}원</p>
                                <p>평점 : {over50000Products.grade}</p>
                                <img style={styles.img} src={over50000Products.img} alt={over50000Products.name}></img>   
                            </div>                     
                        )))
                        : (<p>50,000원 이상 상품이 없습니다.</p>)
                    }                
                </section>

                <section>
                    <h2>전체 상품</h2>
                    { allProducts.length > 0 ? 
                        (<div style={styles.grid}>  
                            { allProducts.map((allProducts, idx) => (
                                <div key={idx}>
                                    <h3>{allProducts.name}</h3>
                                    <p>{allProducts.price}원</p>
                                    <p>평점 : {allProducts.grade}</p>
                                    <img style={styles.imgGrid} src={allProducts.img} alt={allProducts.name}></img>   
                                </div>
                            ))}
                        </div>)
                        : (<p>상품이 없습니다.</p>)
                    }                    
                </section>
            </div>
}

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px'
    },
    imgGrid: {
        width: '80%',
        height: 'auto'
    },
    img: {
        width: '20%',
        height: 'auto'        
    }
};