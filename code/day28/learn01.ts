// ▶ 리액트 Nivo Chart 데이터 시각화
/*

    ▶ 라이브러리 설치
       ⇒ npm i @nivo/core @nivo/bar @nivo/line @nivo/pie @nivo/radial-bar @nivo/radar @nivo/tree @nivo/boxplot



    ▶ 차트(Chart)
       대용량 데이터를 시각화하는 방법(2개 이상의 데이터)
       글자 형태의 데이터는 글자 자체에 해당하는 내용을 자세히 설명하도록 명시할 수가 있지만
       숫자 형태의 데이터는 어떤 내용인지 명시가 힘들다.
       숫자 형태의 2개 이상의 데이터를 한 눈에 파악하기 쉽도록 만들고 싶은 경우가 생긴다.
       한눈에 여러개의 숫자형태의 데이터를 파악할 수 있는 구조가 나왔다.

       웹사이트를 만드는데에 있어서 차트는 매우 유용



    ▶ 차트를 만드는 3가지 방법
       1) 순수 HTML                     : 환경이 JS를 거부해도 동작이 된다.
       2) 캔버스(Canvas) HTML 태그       : JS로 그림을 그리기 때문에 자연스러우면서 화려한 차트를 만들 수 있다.
                                          하지만 변경될 때마다 컴포넌트를 새로 그리기 때문에 끊기는 문제가 발생할 수 있으며, 리액트와 성능적으로 궁합 ❌
                                          ➡ chartjs 라이브러리

       3) ⭐SVG                        : SVG는 HTML 태그로 벡터 그래픽을 그리며, 화면 크기에 유연하고 성능 ⭕
                                          따라서 순수 HTML의 장점과 캔버스의 그래픽 표현 장점을 결합한 방식
                                          ➡ Recharts, Nivo 라이브러리 등



    ▶ Nivo 차트 라이브러리
       https://nivo.rocks/components
       
       

    ▶ Nivo 사용 방법(라이브러리 설치)
       ⇒ @nivo/core       : Nivo 사용하기 위한 기본 코어 라이브러리
       ⇒ @nivo/차트        : 원하는 차트의 라이브러리를 추가 설치



    ▶ Nivo 옵션 공통
       ● data     : 해당 차트를 구성하기 위한 데이터

    

    ▶ 바(Bar) 차트
       : 데이터를 막대기로 표현
       ➡ https://nivo.rocks/bar

       ⇒ import { ResponsiveBar } from '@nivo/bar';
       ⇒ @nivo/bar 옵션
          ● indexBy    : 데이터에서 키값을 지정하는 속성
          ● keys       : 차트에 여러 값을 넣는 경우, 각 값들의 키 목록




    ▶ 라인(Line) 차트
       : 데이터를 선으로 연결해 표현
       ➡ https://nivo.rocks/line

       ⇒ import { ResponsiveLine } from '@nivo/line';
       ⇒ @nivo/line 옵션
          ● data     : 데이터이며, 키값이 고정
                       {id: 식별값, data: [차트를 구성하는 값, {x:값의식별자, y:실제값}] }




    ▶ 파이(Pie) 차트
       : 데이터를 원형으로 나누어 비율을 표현
       ➡ https://nivo.rocks/pie

       ⇒ import { ResponsivePie } from '@nivo/pie';
       ⇒ @nivo/pie 옵션
          ● data            : 데이터이며, 키값이 고정된 형태
                              { id: 식별값, value: 실제값 }
          ● startAngle      : 파이 차트가 시작 각도 설정
          ● endAngle        : 파이 차트가 끝나는 각도 설정
          ● innerRadius     : 차트의 내부 반지름 설정(0이면 파이 차트, 0보다 크면 도넛 차트)
          ● padAngle        : 각 데이터 항목 사이의 간격(패딩) 설정
          ● cornerRadius    : 각 데이터 항목 모서리 둥글게 설정




    ▶ 중첩파이(Radial-Bar) 차트
       : 여러 데이터 그룹을 원형으로 표현, 각 데이터가 원의 일부분으로 나뉨
       ➡ https://nivo.rocks/radial-bar
       
       ⇒ import { ResponsiveRadialBar } from '@nivo/radial-bar';
       ⇒ @radial-bar 옵션
          ● data            : 데이터, 키값이 고정
                              { id: 식별값, data:[ {x:식별키, y:실제값}, {x:식별키, y:실제값} ] }
          ● startAngle      : 중첩 파이 차트의 시작 각도 설정
          ● endAngle        : 차트의 끝나는 각도 설정
          ● innerRadius     : 차트의 내부 반지름을 설정
          ● padAngle        : 각 데이터 항목 사이의 간격(패딩) 설정
          ● cornerRadius    : 각 데이터 항목의 모서리 둥글게 설정
          ● padding         : 전체 차트에서 각 그룹 간의 간격 설정




    ▶ 레이더(Radar) 차트
       : 여러 변수의 값을 다각형으로 표현
       ➡ https://nivo.rocks/radar
       
       ⇒ import { ResponsiveRadar } from '@nivo/radar';
       ⇒ @nivo/radar 옵션
          ● data        : { indexBy:식별값, keys키1:실제값, keys키2:실제값, ... }
          ● indexBy     : 데이터에서 키값을 지정하는 속성
          ● keys        : 한 개의 차트에 여러 개의 값을 넣는 경우, 각 값의 키 목록을 넣는 속성




    ▶ 트리(Tree) 차트
       : 데이터의 계층 구조를 나타내는 차트
       ➡ https://nivo.rocks/tree
       
       ⇒ import { ResponsiveTree } from '@nivo/tree';
       ⇒ @nivo/tree 옵션
          ● data         : 고정된 키값과 고정되지 않은 키값 두 종류를 사용
                           재귀적인 구조로 데이터가 연결되는 형태
                           { identity:식별키값, children:[] }

          ● identity    : 식별 키값     
          ● mode        : tree      - 동일 차수 동일 높이
                          dendogram - 마지막 차수 동일 높이

          ● layout      : left-to-right 같은 방향 지정




    ▶ 통계분석(Boxplot) 차트
       : 데이터의 분포를 보여주는 통계적 차트
       ➡ https://nivo.rocks/boxplot
       
       ⇒ import { ResponsiveBoxPlot } from '@nivo/boxplot';
       ⇒ @nivo/boxplot 옵션
          ● data         : [{ groupBy:식별자명, subGroupBy:서브그룹식별자명, value:실제값 }]
                           

          ● groupBy         : 그룹 식별자명
          ● subGroupBy      : 서브 그룹 식별자명
          ● value           : 실제 값이 들어있는 값 키    

          ● minValue        : 차트에서 표시할 최소 값
          ● maxValue        : 차트에서 표시할 최대 값

          ● quantiles       : 데이터를 나누는 기준이 되는 값



*/