/* 
    [🔒문제]
        json-dummy-data에서 10명의 사용자 정보 출력

    [📝출력]
        language - "Sin" 특정 단어가 포함된 사용자만 출력

*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ User 사용자 - 인터페이스(Interface) 정의
interface User {
    name: string;
    language: string;
    id: string;
    bio: string;
    version: number;
}

// ▶ webScraping - 비동기 함수 정의
//    ☞ User 객체의 배열(User[])을 반환
async function webScraping(url: string): Promise<User[]> {
    return await fetch(url).then(v=>v.json());
}

// ▶ 데이터 처리 및 필터링
webScraping("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json")
.then((data: User[])=>{
    // 10명의 사용자 정보를 출력
    const TenUsers = data.slice(0, 10);
    return TenUsers;
})
.then((TenUsers: User[])=>{
    // language 속성에 "Sin"이 포함된 사용자만 필터링
    const filteredUsers = TenUsers.filter(val => val.language.includes('Sin'));
    console.log(filteredUsers);
})
.catch(error => console.log('Error : ', error));