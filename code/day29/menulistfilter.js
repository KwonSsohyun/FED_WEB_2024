// ▶ 서버리스 함수에 등록하여
//    필터링된 메뉴 데이터를 반환('내용' 항목을 제외하고 반환)
/*
    해당 URL 접속 시

    http://192.168.100.20:5555/cloud/sohyun/menulistfilter
    ➡ {"datas":["사과","포도","배"]}

*/
export default async (req,res) => {

    const menu = await fetch('http://192.168.100.20:5555/cloud/sohyun/menulist').then(v=>v.json());

    return JSON.stringify({
         datas: menu.datas.filter(v=>!(v == '내용'))
    }) 
 }