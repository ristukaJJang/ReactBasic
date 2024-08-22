import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react'

// 이벤트 처리
// - 웹 페이지(컴포넌트)가 사용자와 상호작용을 받아들여 그것에 대한 처리를 하는 것
// - React에서는 addEventListener 함수를 사용하지 않고 on이벤트 속성 사용
// - on이벤트 속성은 lowerCamelCase를 따른다.
// - on이벤트 속성에 콜백 함수 전달

export default function EventComponent() {

    const onClickHandler = () => {
        alert('클릭했습니다.');
    };

    // onClick : 클릭이 발생했을 때
    // onChange : 요소의 값이 변경될 때(input 요소에서 값이 변경될 때)
    // onKeyDown : input 요소에서 키보드 입력이 발생했을 때

    // 각 이벤트의 콜백 함수는 이벤트 객체를 매개변수로 받을 수 있다
    // Typescript에서는 이벤트 객체의 타입을 'Event 클래스<이벤트가 발생한 요소>'로 지정
    const onClick2Handler = (event: MouseEvent<HTMLDivElement>) => {
        console.log(event);
    };

    const onKeyDownHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        console.log("Keydown : " + event.key);
    };

    const onChangeHandler = (evnet: ChangeEvent<HTMLInputElement>) => {
        console.log("Change : " + evnet.target.value);
    };
    // onKeyDown : 내가 키보드에서 입력한 키만 나타남
    // onKeyChange : input에서 변경이 일어난 후의 결과값

    // 콜백 함수의 매개변수가 이벤트만 받는 형태가 아니라면 직접적으로 전달하여 사용 불가
    // 그러한 함수를 이벤트에 등록하고자 하면 해당 이벤트 속성에 직접 익명 함수 표현식을 사용하여
    // 선언 후 
    const onClick3Handler = (str: String) => {
        console.log(str);
    };

    const employees = [
        {
            name: '홍길동',
            employeeNumber: '202401'
        },
        {
            name: '김철수',
            employeeNumber: '202402'
        },
    ];

    const onShowEmployeeNumber = (name: String, employeeNumber: String) => {
        alert('이름 : ' + name + '\n사번 : ' + employeeNumber);
    };

    let count = 0;
    const onIncrease = () => {
        // 좋아요 누르면 숫자 커지는 그런거에 쓰면 될 듯
        count++;
        console.log(count);
    };


  return (
    <>
        <button onClick={onClickHandler}>클릭</button>
        {/*함수 뒤에 괄호를 붙이면 호출, 함수명만 쓰면 전달*/}

        <div onClick={onClick2Handler}>마우스 이벤트</div>

        <input onKeyDown={onKeyDownHandler} onChange={onChangeHandler}></input>

        <button onClick={()=> onClick3Handler('안녕')}>매개변수 클릭</button>

        { employees.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <button onClick={()=>onShowEmployeeNumber(item.name, item.employeeNumber)}>사번확인</button>
                    {/*익명 함수를 통해 함수 전달을 호출로 만들어 매개변수를 전달해준다.*/}
                </div>
            )) }

        <h1>{count}</h1>
        <button onClick={onIncrease}>+</button>
    </>
  )
}
