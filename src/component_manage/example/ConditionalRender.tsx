import React from 'react'

// 조건부 렌더링
// - 상황(조건)에 따라 다르게 렌더링 할 때 사용하는 방법
// - if, &&, ? :(삼항연산자) 를 사용하는 방법이 존재

// if문을 이용한 조건부 반환
// - JSX 외부(return 밖)에서 조건에 따라 return을 다르게 줌

interface Props {
    num: number;
}

function IfComponent({num}:Props) {
    // num 값이 양수면 붉은색, 음수면 파란색, 0이면 초록색
    if(num > 0) {
        return (
            <h1 style={{color:'red'}}>{num}</h1>
        )
    } else if(num < 0) {
        return (
            <h1 style={{color:'blue'}}>{num}</h1>
        )
    } else {
        return (
            <h1 style={{color:'green'}}>{num}</h1>
        )
    }
}

// 삼항 연산자(? : )를 이용한 조건부 렌더링
// - JSX 내부(return 내부)에서 상황(조건)에 따라 렌더링 할 때 사용
function ThreeTermComponent({num}: Props) {
    // num 값이 양수면 붉은색, 음수면 파란색, 0이면 초록색
    return (
        <h1 style={{color:num > 0 ? 'red' : num < 0 ? 'blue' : 'green'}}>{num}</h1>
    )
}

// 논리 연산자를 이용한 족너부 렌더링
// - JSX 내부(return 내부)에서 상황(조건)에 따라 렌더링 할 때 사용
function LogicComponent({num}: Props) {
    // num 값이 짝수일 때만 렌더링
    return (
        <h1>num: {(num % 2 === 0) && num}</h1>
    )
}

export default function ConditionalRender() {
    return (
        <div>
            <IfComponent num={5} />
            <IfComponent num={-7} />
            <IfComponent num={0} />

            <ThreeTermComponent num={5} />
            <ThreeTermComponent num={-7} />
            <ThreeTermComponent num={0} />

            <LogicComponent num={4} />
            <LogicComponent num={7} />
        </div>
    )
}
