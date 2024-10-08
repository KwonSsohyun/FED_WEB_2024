// ▶ 서버리스 함수에 등록하여 
//    메뉴 데이터를 DB처럼 이용
/*
    해당 URL 접속 시

    http://192.168.100.20:5555/cloud/sohyun/menulist
    ➡ {"datas":["사과","포도","배","내용"]}

*/
export default (req,res) => {
   return JSON.stringify({
        datas: [
            "사과",
            "포도",
            "배",
            "내용"
        ]
   }) 
}