import React from 'react';

// JSX(JavaScript XML) / TSX(TypeScript XML)
// XML의 형태와 유사하고 DOM 트리를 생성하는 JS, TS 확장자

// 컴포넌트 : 화면에 표시되는 하나의 요소 단위
// 각각의 독립적인 상태와 로직을 가진다
// 클래스형 컴포넌트는 사용 X, 함수형 컴포넌트만 사용

// 컴포넌트 선언 방법
/* 1. 클래스형 컴포넌트
 - class 로 컴포넌트 작성
 - 반드시 첫글자는 대문자
 - react 패키지의 Component 클래스를 상속하여 구현
 - render() 메서드의 반환값으로 렌더링하고자 하는 요소를 반환
 - 하나의 컴포넌트를 클래스의 인스턴스로 인식
 */
export class ClassComponent extends React.Component{
    render(): React.ReactNode {
        return (
            <h1>클래스형 컴포넌트</h1>
        )
    }
}

/* 2. function component
 - 함수로 컴포넌트를 작성
 - 반드시 첫글자를 대문자로 작성해야 컴포넌트 함수로 인식
 - 함수의 반환값으로 렌더링하고자 하는 요소 반환
*/
export function FunctionComponent() {
    return (
        <h1>함수형 컴포넌트</h1>
    )
}

// VSCode의 ES7+ / React/Redux/React-Native snippets 확장 설치 후
// 단축 명령으로 컴포넌트 생성 가능

// 클래스형 : rcc 단축 명령으로 생성 가능
// 클래스의 이름은 파일명과 동일하게 작성됨
// import React, { Component } from 'react'

// export default class Component extends Component {
//   render() {
//     return (
//       <div>Component</div>
//     )
//   }
// }

// 함수형 : rfc 단축 명령어로 생성 가능
// 함수명은 파일명과 동일하게 작성됨
// import React from 'react'

// export default function Component() {
//   return (
//     <div>Component</div>
//   )
// }

export default function Component() {
    /* 함수형 컴포넌트의 return
     - 함수형 컴포넌트의 return은 해당 컴포넌트가 랜더링할 요소 반환
     - html 처럼 보이지만 아님
     - 여러가지 자바스크립트 *연산자*를 사용할 수 있음

     반드시 하나의 요소만 반환 가능(0개 X, 2개 이상 X)
     - 다수의 요소를 반환하고 싶다면 최상단에 부모 요소로 묶기 
     - 부모 요소로 묶을 때, <></>를 이용하여 의미없는 태그 생성 가능
     - 반드시 return 바로 뒤에 반환값이 있어야 한다
    */

    /* JSX(TSX)의 규칙
     - 반드시 하나의 요소 반환
     - 모든 태그를 닫아야 함
     - 속성들을 JSX로 지정된 이름을 사용해야 함(lowerCamelCase)
     */
    return (
        <>
            <input className=''/>
            <div>Function Component</div>
            <div>Function Component</div>
        </>
        
    );
}
