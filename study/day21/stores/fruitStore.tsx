import { makeAutoObservable } from 'mobx';
import { fruitData } from './fruitData';    // 과일 공통 데이터 가져오기(name, img, habitats)

// -------------------------------------------------------------------------------
// ▶ 과일 데이터 정의(MobX 상태로 관리)
//   ⇒ 각 과일의 데이터를 MobX 상태로 관리
//     - id       : 과일의 고유 식별자
//     - name     : 과일 이름
//     - img      : 과일 이미지 URL
//     - info     : 과일에 대한 추가 정보
//     - habitats : 과일의 서식지 배열
// -------------------------------------------------------------------------------
const fruits = [
    // 사과 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: fruitData.apple.name,         // fruitData.apple 객체에서 name 속성 가져오기
        img: fruitData.apple.img,           // fruitData.apple 객체에서 img 속성 가져오기
        info: `사과${index + 1}은 쌍떡잎식물 장미목 장미과 낙엽교목 식물인 사과나무의 열매입니다.`,
        habitats: fruitData.apple.habitats  // fruitData.apple 객체에서 habitats 속성 가져오기
    })),
    
    // 바나나 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: fruitData.banana.name,
        img: fruitData.banana.img,
        info: `바나나${index + 1}은 외떡잎식물 생강목 파초과 바나나속에 속하는 식물의 총칭입니다.`,
        habitats: fruitData.banana.habitats
    })),
    
    // 멜론 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        name: fruitData.melon.name,
        img: fruitData.melon.img,
        info: `멜론${index + 1}은 박과의 한해살이 덩굴식물입니다.`,
        habitats: fruitData.melon.habitats
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
//   ⇒ FruitStore 클래스는 MobX 상태로 과일 데이터 관리
//     - fruits           : Fruit[] - 과일 데이터 배열
//     - getFruitByName   : 과일 이름으로 과일을 찾는 메서드
//     - getFruitById     : 과일 이름과 ID로 과일을 찾는 메서드
// -------------------------------------------------------------------------------
export class FruitStore {

    // ● fruits는 원본 fruits 배열과 같은 데이터
    //   값 변경 시, 원본 데이터 같이 변경됨(직접 할당)
    fruits: Fruit[] = fruits;

    constructor() {
        // ● FruitStore 클래스의 상태를 자동으로 관찰
        makeAutoObservable(this);
    }

    // ● 과일 이름으로 과일을 찾는 메서드
    getFruitByName(fruitName: string) {
        return this.fruits.filter(fruit => fruit.name === fruitName);
    }

    // ● 과일 이름과 ID로 과일을 찾는 메서드
    getFruitById(fruitName: string, fruitId: number) {
        return this.fruits.filter(fruit => fruit.name === fruitName && fruit.id === fruitId);
    }

}