import { makeAutoObservable, runInAction, reaction } from 'mobx';

// ▶ 과일 데이터 타입 정의
interface Fruit {
    id: number;
    name: string;
    info: string;
}

// ▶ 과일 데이터 타입 정의
interface FruitData {
    [key: number]: Fruit[];
}

// ▶ 과일 데이터
const fruitData: FruitData = {
    1: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: 'apple',
        info: `🍎사과 ${index + 1}`,
    })),
    2: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: 'banana',
        info: `🍌바나나 ${index + 1}`,
    })),
    3: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: 'melon',
        info: `🍈멜론 ${index + 1}`,
    })),
    4: [
        { id: 1, name: 'apple', info: '🍎사과 1' },
        { id: 2, name: 'apple', info: '🍎사과 2' },
        { id: 3, name: 'apple', info: '🍎사과 3' },
        { id: 4, name: 'apple', info: '🍎사과 4' },
        { id: 5, name: 'banana', info: '🍌바나나 1' },
        { id: 6, name: 'banana', info: '🍌바나나 2' },
        { id: 7, name: 'banana', info: '🍌바나나 3' },
        { id: 8, name: 'banana', info: '🍌바나나 4' },
        { id: 9, name: 'melon', info: '🍈멜론 1' },
        { id: 10, name: 'melon', info: '🍈멜론 2' }
    ],
};


// ▶ FruitStore 클래스
//   MobX를 사용해 상태 관리
export class FruitStore {
    currentPage = 1;    // 현재 페이지
    totalPages = 4;     // 총 페이지 수

    constructor() {
        // ◆ MobX의 자동 관찰 기능 활성화
        makeAutoObservable(this);

        // ◆ currentPage가 변경될 때마다 콘솔에 로그 출력
        reaction(
            () => this.currentPage, // 관찰할 값 : currentPage
            (page) => {
                // 페이지 변경 시 콘솔에 출력
                console.log(`현재 페이지: ${page}`);
            }
        );
    }

    // ● 다음 페이지로 이동하는 메서드
    goToNextPage() {
        // 현재 페이지가 총 페이지보다 작을 때
        if (this.currentPage < this.totalPages) {
            runInAction(() => {
                this.currentPage += 1; // 페이지 증가
            });
        }
    }

    // ● 이전 페이지로 이동하는 메서드
    goToPreviousPage() {
        // 현재 페이지가 1보다 클 때
        if (this.currentPage > 1) {
            runInAction(() => {
                this.currentPage -= 1; // 페이지 감소
            });
        }
    }

    // ● 현재 페이지에 따라 보여줄 과일 데이터 가져오기
    get currentFruits() {
        // 현재 페이지에 해당하는 과일 데이터 반환, 없으면 빈 배열
        return fruitData[this.currentPage] || [];
    }
}
