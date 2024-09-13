import { makeAutoObservable } from 'mobx';

// -------------------------------------------------------------------------------
// ▶ 과일 데이터 정의(MobX 상태로 관리)
// -------------------------------------------------------------------------------
// ▶ 과일 공통 속성
const fruitInfo: {
    [key: string]: {
        name: string;
        img: string;
        habitats: string[];
    };
} = {
    apple: {
        name: 'apple',
        img: 'https://cdn.pixabay.com/photo/2015/05/07/12/16/apple-756386_1280.jpg',
        habitats: ['한국', '중국', '일본']
    },
    banana: {
        name: 'banana',
        img: 'https://cdn.pixabay.com/photo/2014/04/05/12/19/banana-316868_1280.jpg',
        habitats: ['태국', '필리핀']
    },
    melon: {
        name: 'melon',
        img: 'https://cdn.pixabay.com/photo/2014/04/02/16/25/melon-307252_1280.png',
        habitats: ['중국', '일본']
    }    
};

// ▶ 각 과일 개별 데이터
const fruitData = [
    // 사과 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: 'apple',
        info: `사과${index + 1}은 쌍떡잎식물 장미목 장미과 낙엽교목 식물인 사과나무의 열매입니다.`
    })),
    
    // 바나나 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: 'banana',
        info: `바나나${index + 1}은 외떡잎식물 생강목 파초과 바나나속에 속하는 식물의 총칭입니다.`
    })),
    
    // 멜론 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: 'melon',
        info: `멜론${index + 1}은 박과의 한해살이 덩굴식물입니다.`
    })),
];



// -------------------------------------------------------------------------------
// ▶ `Fruit` 타입 정의
//    ⇒ FruitData 타입 : 과일 데이터 배열의 각 요소 설명
//    ⇒ FruitInfo 타입 : 과일 정보 객체의 구조 설명
//    typeof            → 변수나 객체의 타입을 가져옴
//    fruits[number]    → 배열 fruits의 모든 요소가 같은 타입이라는 것을 의미
// -------------------------------------------------------------------------------
type FruitData = typeof fruitData[number];
type FruitInfo = typeof fruitInfo;



// -------------------------------------------------------------------------------
// ▶ 과일 스토어 클래스 생성
//   ⇒ FruitStore 클래스는 MobX를 사용하여 과일 데이터 관리
//     - fruitData      : FruitData[] - 과일 데이터 배열
//     - fruitInfo      : FruitInfo - 과일의 공통 정보
//     - getFruitByName : 주어진 이름으로 과일을 찾는 메서드
//     - getFruitById   : 주어진 이름과 ID로 과일을 찾는 메서드
// -------------------------------------------------------------------------------
export class FruitStore {

    // ● fruitData 과일 데이터 배열
    //   값 변경 시, 원본 데이터 같이 변경됨(직접 할당)
    fruitData: FruitData[] = fruitData;
    // ● fruitInfo 각 과일 공통 정보
    fruitInfo: FruitInfo = fruitInfo;

    constructor() {
        // ● FruitStore 클래스의 상태를 자동으로 관찰
        makeAutoObservable(this);
    }

    // ● 과일 이름으로 과일을 찾는 메서드
    getFruitByName(fruitName: string) {
        return this.fruitData.filter(fruitData => fruitData.name === fruitName);
    }

    // ● 과일 이름과 ID로 과일을 찾는 메서드
    getFruitById(fruitName: string, fruitId: number) {
        return this.fruitData.filter(fruitData => fruitData.name === fruitName && fruitData.id === fruitId);
    }

}