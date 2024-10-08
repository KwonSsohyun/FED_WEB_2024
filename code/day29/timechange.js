// ▶ 서버리스 함수에 등록할 코드
//    서버 시간을 대한민국 표준시(GMT+0900)로 변환하여 반환
/*
    해당 URL 접속 시
    서버의 시간을 대한민국 표준시로 변환하여 반환

    http://192.168.100.20:5555/cloud/sohyun/timechange
    ➡ Tue Oct 08 2024 21:05:04 GMT+0900 (대한민국 표준시)

*/
const timezoneChange = (req, res)=>{
    const timer = new Date();
    // 대한민국 표준시(GMT+0900)로 시간 변환
    const Seoul = new Date(timer.getTime() + (timer.getTimezoneOffset() + 540) * 60 * 1000);
    res.send(`${Seoul}`);
}

export default timezoneChange;