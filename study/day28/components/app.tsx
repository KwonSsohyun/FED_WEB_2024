import React from 'react';
import BarChart from './BarChart';
import RadarChart from './RadarChart';

export default function App() {
    return <div>
        <h1>학생 점수 차트</h1>
        <h2>바(Bar) 차트 - 과목별 점수 비교</h2>
        <BarChart />
        <h2>레이더(Radar) 차트 - 각 과목 평균 성적</h2>
        <RadarChart />
    </div>
}