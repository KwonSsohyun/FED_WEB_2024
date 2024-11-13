// ▶ XML 방식
/*
    <products>
        <product>
            <name>사과</name>
            <price>5000</price>
        </product>
    </products>
*/



// ▶ JSON 방식
/*
    {
        product: [
            {
                name: 사과, price: 5000
            }
        ]
    }
*/



// ▶ Fetch
// fetch().then().catch().finally();

fetch('https://www.reddit.com/r/TikTokCringe/new.json', 
    {   method: 'get',
        // method: 'post', 
        // headers: {
        //     'content-type' : 'application/json'
        // },
        // body: {id:'root'}
    })
    .then(response => {
        console.log(response.status); // 200
        console.log(response.statusText);
        console.log(response.ok); // true
        console.log(response.url); // https://www.reddit.com/r/TikTokCringe/new.json
        console.log(response.redirected); // false

        // return response.json()
        return response.text()
    })
    .then(v => JSON.parse(v))
    .then(v => console.log(v));



// ▶ 이미지/영상 Fetch
//    버튼을 누르면 다운로드 하게 하고 싶으면, 버튼 온클릭 시 해당 fetch를 넣으면 된다.
fetch('https://v.redd.it/8d899w7y6n0e1/DASH_480.mp4?source=fallback')
    .then(response => response.blob())
    .then(v => {
        // 파일 다운로드 
        const url = URL.createObjectURL(v);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.mp4';
        a.click();
    });