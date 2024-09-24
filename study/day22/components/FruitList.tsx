import React from 'react';
import { observer, inject } from 'mobx-react';
import { FruitStore } from '../stores'; // MobX 스토어 가져오기

interface Props {
    fruitStore?: FruitStore;
}

const FruitList = inject('fruitStore')(observer(({ fruitStore }: Props) => {
    const handleNext = () => {
        fruitStore?.goToNextPage(); // 다음 페이지로 이동
    };

    const handlePrevious = () => {
        fruitStore?.goToPreviousPage(); // 이전 페이지로 이동
    };

    return (
        <div>
            <h2>과일 게시판 🍎🍌🍈</h2>
            <ul>
                {fruitStore?.currentFruits.map((fruit) => (
                    <li key={fruit.id}>{fruit.info}</li>
                ))}
            </ul>
            <button onClick={handlePrevious} disabled={fruitStore?.currentPage === 1}>
                이전
            </button>
            <button onClick={handleNext} disabled={fruitStore?.currentPage === fruitStore?.totalPages}>
                다음
            </button>
        </div>
    );
}));

export default FruitList;