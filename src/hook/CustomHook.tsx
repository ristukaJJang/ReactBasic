import React, { useEffect, useState } from 'react'

// Custom hook : 리액트에서는 훅 함수의 호출은 반드시 함수형 컴포넌트 코드 블럭에서만 가능
// 함수명의 시작을 use로 시작하는 이름으로 작성하여 커스텀 훅 함수 생성 가능
// 커스텀 훅에는 다른 훅 함수들이 포함될 수 있다.

const useStateFunction = () => {
    // 함수형 컴포넌트여야 하는데, 이름 시작이 대문자가 아님 -> 함수형 X
    const [state1, setState1] = useState<number>(0);
    const [state2, setState2] = useState<number>(0);

    useEffect(()=> {
        console.log('state1 변경')
    }, [state1]);

    useEffect(() => {
        console.log('state2 변경')
    }, [state2]);

    useEffect(()=> {
        console.log('state1 혹은 state2 변경')
    }, [state1, state2])

    return {state1, state2, setState1, setState2};
}

export default function CustomHook() {

    // const [state1, setState1] = useState<number>(0);
    // const [state2, setState2] = useState<number>(0);

    // useEffect(()=> {
    //     console.log('state1 변경')
    // }, [state1]);

    // useEffect(() => {
    //     console.log('state2 변경')
    // }, [state2]);

    // useEffect(()=> {
    //     console.log('state1 혹은 state2 변경')
    // }, [state1, state2])

    const {state1, state2, setState1, setState2}= useStateFunction();

    const onState1Add = () => {
        setState1(state1 + 1);
    };

    const onState2Add = () => {
        setState2(state2 + 1);
    };
    

  return (
    <div>
        <div>
            {state1}
            <button onClick={onState1Add}>state1 +</button>
        </div>
        <div>
            {state2}
            <button onClick={onState2Add}>state2 +</button>
        </div>
        <SubComponent/>
    </div>
  )
}

function SubComponent() {

    const {state1, state2, setState1, setState2}= useStateFunction();

    const onState1Add = () => {
        setState1(state1 + 1);
    };

    const onState2Add = () => {
        setState2(state2 + 1);
    };

    return(
        <>
            <div>
                {state1}
                <button onClick={onState1Add}>state1 +</button>
            </div>
            <div>
                {state2}
                <button onClick={onState2Add}>state2 +</button>
            </div>
        </>
        
    )
}