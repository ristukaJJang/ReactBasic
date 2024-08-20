import React from 'react'

const title = 'Curly Braces';

// 1. 요소 컨텐츠에 자바스크립트 표현식을 쓰고자 할 때 사용
// 2. 주석 처리 - html 주식 사용 불가하기 때문에 JS 주석 사용
// 3. JSX에서 인라인 스타일을 적용할 때 사용
//  - JSX에서 인라인 스타일은 문자열 대신 객체로 표현


export default function CurlyBraces() {
    /* Curly Braces : JSX에서 자바스크립트 표현식을 작성할 때 사용하는 방법
     - JSX 안에 {}로 영역을 지정하여 그 안에 자바스크립트 작성 */
    
    return (
        <>
            <h1 style={{backgroundColor:'red'}}>{title}</h1>
            <p>{10+20}</p>
        </>
        
    )
}
