import React, { useState } from 'react'


// 컴포넌트로 상태 전달
// - 부모 요소에서 자식 요소로 상태를 전달할 수 있음
// - 자식 요소의 속성으로 전달
// - 문제점 : 자식 컴포넌트에서 상태를 변경하면 부모 컴포넌트가 리렌더링 됨
// -> 부모 컴포넌트의 자식 컴포넌트 중 해당 상태를 사용하지 않는 컴포넌트까지 렌더링
// -> 코드의 복잡성(컴포넌트의 속성 복잡성)이 증가
// 해결법 : 전역 상태로 관리하는 방법이 파생
// 전역 상태 관리 기법 : context, Redux, zustand 등이 있다.

interface Child1Props {
    count:number;
}

function Child1({count}:Child1Props){
    return (
        <div style={{height:'200px', backgroundColor:'red'}}>
            <h1>{count}</h1>
        </div>
    )
}

function Child2(){
    return (
        <div style={{height:'200px', backgroundColor:'green'}}></div>
    )
}

interface Child3Props {
    //count:number;
    //setCount: React.Dispatch<React.SetStateAction<number>>
    onIncrease: () => void;
}

function Child3({/*count, setCount*/ onIncrease}:Child3Props){

    // const onIncrease = () => {
    //     //setCount(count+1)
    //     setCount(count => count+1);
    // };
    
    return (
        <div style={{height:'200px', backgroundColor:'blue'}}>
            <button onClick={onIncrease} style={{width:'100%', height:'100%'}}>+</button>
        </div>
    )
}

export default function ForwordingComponent() {

    const [count, setCount] = useState<number>(0);
    const onIncrease = () => {
        setCount(count => count+1);
    };

    return (
        <div>
            <Child1 count={count} />
            <Child2/>
            <Child3 onIncrease={onIncrease}/>
        </div>
    )
}
