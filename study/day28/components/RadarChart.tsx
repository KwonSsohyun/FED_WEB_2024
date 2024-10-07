import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { studentsData, Student } from './studentsData';

// ▶ 각 과목의 평균 성적 계산
const subjectAverages = {
    수학: studentsData.reduce((temp, student) => temp + student.수학 ,0) / studentsData.length,
    영어: studentsData.reduce((temp, student) => temp + student.영어 ,0) / studentsData.length,
    국어: studentsData.reduce((temp, student) => temp + student.국어 ,0) / studentsData.length
}

// ▶ 레이더 차트에 사용할 데이터 구성
const radarData = [
    {과목: '수학', 평균: subjectAverages.수학},
    {과목: '영어', 평균: subjectAverages.영어},
    {과목: '국어', 평균: subjectAverages.국어}
];


// ▶ 레이더 차트 컴포넌트
export default function RadarChart() {
    return <div style={{width:"50vw", height:"50vh"}}>
        <ResponsiveRadar
            data={radarData}
            indexBy='과목'
            keys={['평균']}
            margin={{ top: 20, right: 30, bottom: 50, left: 60 }} // 차트 여백 설정
        />
    </div>
}