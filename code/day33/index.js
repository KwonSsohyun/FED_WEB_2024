// ▶ CryptoJS(암호화)
console.log(CryptoJS.SHA3('Hello world'));
console.log(CryptoJS.SHA3('Hello world').toString());



// ▶ SweetAlert2(알림창)
Swal.fire({
    title: 'Sweet Alert 2',
    text: '스위트 얼럿창 예제',
    icon: 'success',
    toast: true,
    position: 'top-end'
});



// ▶ Swiper(슬라이더)
// const swiper = new Swiper('.swiper');
const swiper = new Swiper('.swiper', {
    slidesPerView: 2,    // 2개씩 보이게
    loop: true,          // 무한 반복
    autoplay: {
        delay: 500       // 0.5초 마다
    }
});



// ▶ Dropzone(파일 업로드)
Dropzone.autoDiscover = false;
// new Dropzone('.dropzone', {});
new Dropzone('.dropzone', {
    url: 'http://127.0.0.1:5500/upload',
    method: 'post',
    timeout: 200,
    uploadMultiple: false
});