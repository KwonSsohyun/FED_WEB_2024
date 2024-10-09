import React, { useState, useEffect } from 'react';

export default function ServerlessAPI() {

    // ▶ 서버리스에서 가져온 데이터 상태 변수 정의
    // ① 서버에서 가져온 시간 저장
    const [time, setTime] = useState('');

    // ② 쿼리 파라미터를 JSON 형태 저장
    const [parmData, setParmData] = useState(null);
    const name = 'sohyun';

    // ③ 합산할 데이터 / 합산 결과값
    const [plusData1, setPlusData1] = useState(0);
    const [plusData2, setPlusData2] = useState(0);
    const [plusResult, setPlusResult] = useState(null);

    // ④ 과일 데이터
    const [menuList, setMenuList] = useState([]);
    // ⑤ 과일 필터링 데이터
    const [filterMenuList, setFilterMenuList] = useState([]);

    // ⑥ 계산기 데이터
    const [calcData1, setCalcData1] = useState(0);
    const [calcData2, setCalcData2] = useState(0);
    const [calcOperator, setCalcOperator] = useState('P');
    const [calcResult, setCalcResult] = useState(null);

    // ⑦ 사용자 요청 데이터
    const [reqName, setReqName] = useState('');
    const [reqAge, setReqAge] = useState('');
    const [requestData, setRequestData] = useState(null);


    // ------------------------------------------------------------------------------------------
    // ▶ 컴포넌트 최초 렌더링 시 서버리스 데이터 가져오기
    useEffect(()=>{
        const fetchData = async()=> {
            try{
                // ① 서버에서 현재 시간을 가져와 상태에 저장
                setTime(await fetch('http://localhost:5555/cloud/sohyun/timechange')
                                .then(data => data.text())
                );
                // ② 서버에서 쿼리 파라미터를 가져와 JSON으로 상태에 저장
                setParmData(await fetch(`http://localhost:5555/cloud/sohyun/temp?name=${name}`)
                                    .then(data => data.json())
                );
                // ④ 서버에서 과일 데이터 가져와 상태에 저장
                setMenuList(await fetch('http://localhost:5555/cloud/sohyun/menulist')
                                    .then(data => data.json())
                                    .then(data => data.datas)
                );
                // ⑤ 서버에서 과일 필터링 데이터 가져와 상태에 저장
                setFilterMenuList(await fetch('http://localhost:5555/cloud/sohyun/menulistfilter')
                                        .then(data => data.json())
                                        .then(data => data.datas)
                );

                // ⑦ 서버에서 기본 설정된 사용자 요청 데이터 가져와 상태에 저장
                setRequestData(await fetch('http://localhost:5555/cloud/sohyun/requestData')
                                    .then(data => data.json())
                );

            } catch(error) {
                console.log('서버리스와 리액트 애플리케이션 간의 통신 오류', error);
            }
        }

        fetchData();
    }, []);


    // ------------------------------------------------------------------------------------------
    // ▶ 서버리스 함수 호출
    // ③ 합산 결과값 반환
    const handlePlus = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지
        setPlusResult(await fetch(`http://localhost:5555/cloud/sohyun/plus?data=${plusData1}&ammount=${plusData2}`)
                                .then(data => data.json())
                                .then(data => data.message)
        );
    }

    // ⑥ 계산기 결과값 반환
    const handleCalculator = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCalcResult(await fetch(`http://localhost:5555/cloud/sohyun/calculator?left=${calcData1}&right=${calcData2}&operator=${calcOperator}`)
                                .then(data => data.json())
                                .then(data => data.result)
        );
    }

    // ⑦ 사용자 요청 데이터 반환
    const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 서버로 데이터 전송
        const response = await fetch('http://localhost:5555/cloud/sohyun/requestData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
            },
            body: JSON.stringify({ reqName, reqAge }) // 요청 본문 데이터
        });

        const data = await response.json();
        setRequestData(data); // 응답 데이터 상태 업데이트
    };


    // ------------------------------------------------------------------------------------------
    // ▶ 서버리스에서 받아온 데이터 출력
    return <div>
        <h2>현재 시간 : {time ? time : '서버리스에서 시간데이터 가져오는 중...'}</h2>
        <hr/>
        <h2>{JSON.stringify(parmData)}</h2>
        <hr/>
        <div>
            <h2>두 수의 합산 계산기</h2>
            <form onSubmit={handlePlus}>
                <input onChange={(e) => setPlusData1(parseInt(e.target.value))} />
                +
                <input onChange={(e) => setPlusData2(parseInt(e.target.value))} />
                
                <button type='submit'>계산하기</button>
            </form>
            <h3>합산결과 : {plusResult ? plusResult : '숫자를 입력해주세요'}</h3>
        </div>
        <hr/>
        <div>
            <h2>과일 목록</h2>
            <ul>
                {
                    menuList.map((fruit, idx) => <li key={idx}>{fruit}</li> )
                }
            </ul>
        </div>
        <hr/>
        <div>
            <h2>과일 필터링 목록('내용' 제외)</h2>
            <ul>
                {
                    filterMenuList.map((fruit, idx) => <li key={idx}>{fruit}</li> )
                }
            </ul>
        </div>
        <hr/>
        <div>
            <h2>계산기</h2>
            <form onSubmit={handleCalculator}>
                <input onChange={(e) => setCalcData1(parseInt(e.target.value))} />
                <select onChange={(e) => setCalcOperator(e.target.value)}>
                    <option value='P'>+</option>
                    <option value='-'>-</option>
                    <option value='*'>*</option>
                    <option value='D'>/</option>
                </select>
                <input onChange={(e) => setCalcData2(parseInt(e.target.value))} />
                <button type='submit'>계산하기</button>
            </form>
            <h3>계산결과 : {calcResult ? calcResult : '계산 결과가 없습니다'}</h3>
        </div>
        <hr/>
        <div>
            <h2>사용자 데이터 전송</h2>
            <form onSubmit={handleRequest}>
                <input onChange={(e) => setReqName(e.target.value)} placeholder="이름" />
                <input onChange={(e) => setReqAge(e.target.value)} placeholder="나이" />
                <button type='submit'>서버리스 전송</button>
            </form>
            <h3>서버리스 응답 데이터 : {JSON.stringify(requestData)}</h3>
        </div>
    </div>
}