// ▶ 바(Bar) 차트
/*
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export default function (){

    return <div>
        <div style={{width:"50vw", height:"50vh"}}>
            <ResponsiveBar
                data={[
                    {
                        name: '사과 가격',
                        value: 500,
                        '서울': 500,
                        '청송': 450
                    },
                    {
                        name: '포도 가격',
                        value: 700,
                        '서울': 700,
                        '청송': 800
                    }
                ]}
                indexBy="name"
                keys={[
                    "value",
                    "서울",
                    "청송"
                ]}
                groupMode="grouped"
            />
        </div>
    </div>
}
*/



// ▶ 라인(Line) 차트
/*
import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export default function (){

    return <div>
        <div style={{width:"50vw", height:"50vh"}}>
            <ResponsiveLine
                data={[
                    {
                        id: "사과 가격",
                        data: [
                            {x: "5월", y: 500},
                            {x: "6월", y: 750},
                            {x: "7월", y: 450}
                        ]
                    },
                    {
                        id: "포도 가격",
                        data: [
                            {x: "5월", y: 600},
                            {x: "6월", y: 350},
                            {x: "7월", y: 950}
                        ]
                    },
                ]}
            />
        </div>
    </div>
}
*/



// ▶ 파이(Pie) 차트
/*
import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export default function (){

    return <div>
        <div style={{width:"50vw", height:"50vh"}}>
            <ResponsivePie
                data={[
                    {id:"사과 가격", value: 500},
                    {id:"포도 가격", value: 750}
                ]}
                startAngle={30}
                endAngle={280}
                innerRadius={0.3}
                padAngle={1}
                cornerRadius={3}
            />
        </div>
    </div>
}
*/



// ▶ 중첩파이(Radial-Bar) 차트
/*
import React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';

export default function (){

    return <div>
        <div style={{width:"50vw", height:"50vh"}}>
            <ResponsiveRadialBar
                data={[
                    {
                        id: "권토끼",
                        data: [
                            {x:"수학", y:50},
                            {x:"과학", y:80},
                        ]
                    },
                    {
                        id: "손거북",
                        data: [
                            {x:"수학", y:70},
                            {x:"과학", y:90},
                        ]
                    },
                ]}
                startAngle={20}
                endAngle={290}
                innerRadius={0.4}
                padAngle={3}
                cornerRadius={4}
                padding={0.5}
            />
        </div>
    </div>
}
*/



// ▶ 레이더(Radar) 차트
/*
import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export default function (){

    return <div>
        <div style={{width:"50vw", height:"50vh"}}>
            <ResponsiveRadar
                margin={{ top:100 }}
                data={[
                    {
                        "name": "Kwon So Hyun",
                        "income": 50,
                        "reputation": 80,
                        "prospects": 75,
                        "satisfaction": 65,
                        "stability": 40
                    },
                    {
                        "name": "Im guk jung",
                        "income": 70,
                        "reputation": 55,
                        "prospects": 35,
                        "satisfaction": 75,
                        "stability": 80
                    },
                    {
                        "name": "Tea jong",
                        "income": 70,
                        "reputation": 55,
                        "prospects": 35,
                        "satisfaction": 75,
                        "stability": 80
                    }
                ]}
                indexBy="name"
                keys={[
                    "income",
                    "reputation",
                    "prospects",
                    "satisfaction",
                    "stability"
                ]}
            />
        </div>
    </div>
}
*/



// ▶ 트리(Tree) 차트
/*
import React from 'react';
import { ResponsiveTree } from '@nivo/tree';

export default function (){

    return <div>
        <div style={{width:"50vw", height:"50vh"}}>
            <ResponsiveTree
                data={
                    {
                        name: "1차",
                        children: [
                            {
                                name: "2차 - 1",
                                children: [
                                    {name: "3차 - 1", children: []},
                                    {name: "3차 - 2", children: []},
                                    {name: "3차 - 3", children: []}
                                ]
                            },
                            {
                                name: "2차 - 2",
                                children: [
                                    {name: "3차 - 1", children: []},
                                    {name: "3차 - 2", children: []},
                                    {name: "3차 - 3", children: []}
                                ]
                            },
                            {
                                name: "2차 - 3"
                            },
                        ]
                    }
                }
                identity="name"
                mode='tree'
                layout='left-to-right'
            />
        </div>
    </div>
}
*/



// ▶ 통계분석(Boxplot) 차트
import React from 'react';
import { ResponsiveBoxPlot } from '@nivo/boxplot';

export default function (){

    return <div>
        <div style={{width:"50vw", height:"50vh"}}>
            <ResponsiveBoxPlot
                data={[
                    {
                        group: "수학",
                        sub: "권소현",
                        data: 50
                    },
                    {
                        group: "수학",
                        sub: "김토끼",
                        data: 70
                    },
                    {
                        group: "수학",
                        sub: "권소현",
                        data: 80
                    },
                    {
                        group: "수학",
                        sub: "김토끼",
                        data: 90
                    },
                ]}
                groupBy="group"
                subGroupBy="sub"
                value="data"
                minValue={0}
                maxValue={100}
                quantiles={[0.15, 0.25, 0.55, 0.85, 0.95]}
            />
        </div>
    </div>
}