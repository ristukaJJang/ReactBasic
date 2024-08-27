import React, { ChangeEvent, useState } from 'react'

// 상태(state) : 각각의 컴포넌트가 독립적으로 가지고 있는 데이터 저장 공간
// - 상태가 컴포넌트의 렌더링에 영향을 미침
// - 상태가 변경되면 컴포넌트가 리렌더링

export default function StateComponent() {

    // state 선언 방법
    // - useState 훅 함수로 상태 선언
    // - const [상태변수, 상태변경함수] = useState<상태변수타입>(매개변수의 초기값);
    
    //let count: number = 0;
    const [count, setCount] = useState<number>(0);
    
    // let counts: number[] = [];
    const [total, setTotal] = useState<number>(0);
    //const [counts, setCounts] = useState<[]>([0]);

    const [comment, setComment] = useState<string>('');

    const onIncrease = () => {

        // 상태 변수는 반드시 상태변경함수를 통해서 변경해야 리렌더링 됨

        // 상태 변경 함수를 사용하여 상태를 변경한다고 해서 바로 변경되는 것은 아님
        // 함수가 끝나고 렌더링 되는 시점에 적용됨
        // setCount(count + 1);
        // setCount(count + 2);
        // setCount(count + 3); // 위에 3개만 있다면 이것만 적용됨!
        //count++;

        // 상태변경함수에 콜백함수를 전달하면 해당 콜백함수는 누적되어 실행된다 그래서 한번에 +6
        // console.log('상태 count : ' + count);
        // setCount(count => {
        //   console.log('count : ' + count);  
        //   return count + 1;
        // });
        // setCount(count => {
        //   console.log('count : ' + count);
        //   return count + 2;
        // });
        // setCount(count => {
        //   console.log('count : ' + count);
        //   return count + 3;
        // });

        // 상태 변경하는 작업이 한번에 여러번 실행된다면 임시변수 활용 가능
        // let tmp = 0;
        // tmp = count;
        // tmp += 1;
        // tmp += 2;
        // tmp += 3;
        // setCount(tmp);

        // setCount(count + 1);
        // setTotal(total + count);
        // 해당 코드는 setTotal에서 기존의 count 값을 사용하기 때문에 
        // 동작이 한 단계 전 단계로 동작한다는 문제가 있음

        const newCount = count + 1;
        //setCount(newCount);
        //setTotal(total + newCount);

        //counts.push(newCount);
        //console.log(counts);
        //setCounts(counts);
        // 해당 코드는 임시변수를 사용하여 변경 결과 값을 미리 저장하고 사용하면
        // 위의 문제를 해결할 수 있음

        // 타입이 배열 혹은 객체 형태인 상태는
        // 반드시 새로운 배열 혹은 객체를 생성하고 변경해야 인식함
        //const newCounts = [...counts, newCount];
        //setCounts(newCounts);

    };

    let comm = '';
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      comm = event.target.value;
      console.log(comm);

      setComment(event.target.value);
    };


  return (
    <div>
      <h1>{comm}</h1>
      <h1>{comment}</h1>
      {/*만약 input으로 상태를 변경한다면 value로 그 상태를 지정해야 불일치 발생 X*/}

      <input onChange={onChangeHandler} />
      <h1>{count}</h1>
      <h1>{total}</h1>
      {/*<h1>counts length: {counts.length} {counts}</h1>*/}
      <button onClick={onIncrease}>+</button>
    </div>
  )
}
