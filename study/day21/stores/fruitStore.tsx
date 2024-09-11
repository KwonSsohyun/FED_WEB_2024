import { makeAutoObservable } from 'mobx';

// -------------------------------------------------------------------------------
// ▶ 과일 데이터 정의(MobX 상태로 관리)
// -------------------------------------------------------------------------------
const fruits = [
    // 사과 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: 'apple',
        img: 'https://cdn.pixabay.com/photo/2015/05/07/12/16/apple-756386_1280.jpg',
        info: `사과${index + 1}은 쌍떡잎식물 장미목 장미과 낙엽교목 식물인 사과나무의 열매입니다.`,
        habitats: ['한국', '중국', '일본']
    })),
    
    // 바나나 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: 'banana',
        img: 'https://cdn.pixabay.com/photo/2014/04/05/12/19/banana-316868_1280.jpg',
        info: `바나나${index + 1}은 외떡잎식물 생강목 파초과 바나나속에 속하는 식물의 총칭입니다.`,
        habitats: ['태국', '필리핀']
    })),
    
    // 멜론 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: 'melon',
        img: 'https://cdn.pixabay.com/photo/2014/04/02/16/25/melon-307252_1280.png',
        info: `멜론${index + 1}은 박과의 한해살이 덩굴식물입니다.`,
        habitats: ['중국', '일본']
    })),
];


// -------------------------------------------------------------------------------
// ▶ `Fruit` 타입 정의
//    ⇒ Fruit 타입은 { id: number; name: string; img: string; info: string; habitats: string[] }
//      type Fruit = {
//           id: number;
//           name: string;
//           img: string;
//           info: string;
//           habitats: string[];
//      };
//
//    typeof            → 변수나 객체의 타입을 가져옴
//    fruits[number]    → 배열 fruits의 모든 요소가 같은 타입이라는 것을 의미
// -------------------------------------------------------------------------------
type Fruit = typeof fruits[number];


// -------------------------------------------------------------------------------
// ▶ 과일 스토어 클래스 생성
// -------------------------------------------------------------------------------
export class FruitStore {

    // fruits는 원본 fruits 배열과 같은 데이터
    // 값 변경 시, 원본 데이터 같이 변경됨(직접 할당)
    fruits: Fruit[] = fruits;

    constructor() {
        makeAutoObservable(this);
    }

    getFruitByName(fruitName: string) {
        return this.fruits.filter(fruit => fruit.name === fruitName);
    }

    getFruitById(fruitName: string, fruitId: number) {
        return this.fruits.filter(fruit => fruit.name === fruitName && fruit.id === fruitId);
    }

}