/* 
    [🔒2.문제]
        ● 비교 함수 파일   : compare.js
*/
// 🔑Code
// -----------------------------------------------------------------------
function getMaxAge(users){
    const ages = users.map((o) => o.age);
    return Math.max(...ages);
}

function findOldAge(users){
    const maxAge = getMaxAge(users);
    return users.find(users => users.age === maxAge);
}

export {findOldAge};