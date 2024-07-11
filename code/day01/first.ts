// 일반 출력
console.log(1, 2);

console.group("그룹명");
console.log("내용1");
console.groupCollapsed("그룹명");
console.groupEnd();

console.error(1, 2, 3, 4);
console.assert(2 > 3, "출력", "내용");

console.table({ a: 1 });
console.table({ a: [1, 2, 3] });

console.time("시간");
for (let i = 0; i < 10000; i += 1) console.assert(2 < 3, "오류");
console.timeEnd("시간");

console.count("횟수");
console.count("횟수");
console.count("횟수");

// [추적] 에러 띄우는 출력
console.trace("넣을 수도 있지만");

// [실습]
// - 테이블
console.table({ a: [1, 2, 3, 4, 5], b: [1, 2, 3, 4, 5] });

// - 그룹
console.group("그룹으로");
console.group("그룹명");
console.log("1 내용");
console.log("2 내용");
console.groupEnd();
console.groupEnd();
