import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/*
    ▶ 3번예제 (변수 삽입 - {변수명})
    let div:JSX.Element = <div>Hello</div>

    root.render(
        <h1>{div}</h1>
    );
*/



/*
    ▶ 5번예제 (최상위 태그로 감싸줘야 한다. - <></>)
    let divs: JSX.Element[] = [
        <div>Hello1</div>,
        <div>Hello2</div>
    ];
    root.render(
        <>
        <div>Hello1</div>
        <div>Hello2</div>
        </>
    );
*/



/*
    ▶ 6번예제 (조건부 랜더링)
    ※ JSX문에 if 조건식을 사용할 수 없다.
       만약 사용하고 싶다면 즉시 실행함수를 사용하거나 
       리턴문 위에 작성하면 된다.

       JSX문 안에서 조건에 따른 분기 처리를 할때는 
       보통 삼항연산자 또는 단축평가 논리 계산법(짧은 연산자)을 사용

    function ListItemGenerator(count:number):JSX.Element[]{
        let listItem:JSX.Element[] = [];
        for(let i=0; i<count; i+=1){
            listItem.push(<li>{i}</li>)
        }
        return listItem;
    }

    root.render(
        <div>
            {ListItemGenerator(10)}
        </div>
    );
*/



/*
    ▶ 7번예제
    // let Div:JSX.Element = <div><span>ID</span><span>PW</span></div>;

    function Div(){
        return <div><span>ID</span><span>PW</span></div>;
    }
    root.render(
        <div>
            <Div/>
        </div>
    );
*/

/*
    function OrderedList(props:any){
        return <ol>
            {props.children.map(v=><div><span>ID</span>{v}</div>)}
        </ol>;
    }
    root.render(
        <div>
            <OrderedList>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
            </OrderedList>
        </div>
    );
*/



/*
    ▶ React의 컴포넌트(Component) - 함수형
*/
    import Header from './header';
    import Body from './body';
    import Child from './child';

    root.render(
        <div>
            <Header/>

            <Child>
                <div>추가적인1</div>
                <div>추가적인2</div>
            </Child>

            <Body count={5}/>
            <Body count={3}/>
        </div>
    );





/*
    →  책 관리 프로그램 예제
    ▶ React의 컴포넌트(Component) - 함수형
*/
import App from './app';

root.render(
    <App/>
);