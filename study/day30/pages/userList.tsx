import React from 'react';
import UserDataPage from '../components/pages/UserDataPage';
import UserData from '../types/UserData';

// ▶ SSR getServerSideProps 함수
export async function getServerSideProps() {
    // ▶ 외부 API로 데이터 가져오기
    const res = await fetch('http://localhost:3000/app/api/handlerData');
    const data: UserData[] = await res.json();
    // ▶ 페이지 컴포넌트의 props에 데이터 전달
    return { props: { userData: data } }; 
}

export default function userList({ userData }) {
    return <div>
        <UserDataPage userData={userData}/>
    </div>
}