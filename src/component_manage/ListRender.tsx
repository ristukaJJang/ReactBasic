import React from 'react'

/* 리스트 렌더링
    - JSX 내부에서 반복적으로 렌더링하는 요소에 대하여 반복 처리하는 방법
    - JSX 내부에서는 for/while 같은 반복 구문 사용 불가
    - 리스트의 각종 메서드 활용
*/

export default function ListRender() {

    const fruits = ['apple', 'banana', 'cacao'];
    const listItems = fruits.map((item, index)=> <h3 key={index}>{item}</h3>);
    // listItems = [<h3>apple</h3>, <h3>banana</h3>, <h3>cacao</h3>];

    // 특정 횟수만큼 반복 렌더링하는 방법
    const counts:number[] = [];
    for(let count = 0; count < 10; count++) {
        counts.push(count);
    }
    const counts2 = new Array(10).fill(0); // 단순 반복, 키값이 필요없으면 사용 가능

    // 특정 조건에 따라 반복 렌더링하는 방법

  return (
    <div>
        {listItems}
        {counts.map(item => <h5 key={item}>반복작업</h5>)}
    </div>
  )
}
