import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { studentsData, Student } from './studentsData';

// ▶ 각 학생의 정보를 리턴
const getStudentsData = (data: Student[]) => {
    return data.map((student) => ({
        name: student.name,
        수학: student.수학,
        영어: student.영어,
        국어: student.국어
    }));
};

// ▶ 바 차트 컴포넌트
export default function BarChart() {

    const barChartData = getStudentsData(studentsData);

    return <div style={{width:"50vw", height:"50vh"}}>
        <ResponsiveBar
            data={barChartData}
            indexBy='name'
            keys={['수학', '영어', '국어']}
            margin={{ top: 20, right: 30, bottom: 50, left: 60 }} // 차트 여백 설정
        />
    </div>
}