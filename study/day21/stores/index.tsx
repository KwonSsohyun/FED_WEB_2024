import { FruitStore } from './fruitStore';

// ▶ MobX 스토어 인스턴스 생성
const fruitStore = new FruitStore();


// ▶ 여러 MobX 스토어를 객체로 묶습니다.
const stores = {
    fruitStore, // fruitStore 인스턴스를 stores 객체에 포함
};


// ▶ MobX 스토어 객체와 스토어 타입을 내보냅니다.
//   → stores       : 모든 MobX 스토어 인스턴스를 포함한 객체
//   → FruitStore   : FruitStore의 타입 정의
export { stores, FruitStore };