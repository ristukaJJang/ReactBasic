import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function QueryString() {

    // useSearchParams() : url에서 Query String 값을 받을 수 있도록 하는 react-router의 hook 함수
    // ex) http://localhost:3000/router/query-string?name=홍길동&age=23
    const [queryParam] = useSearchParams();
    const name = queryParam.get('name');
    const age = queryParam.get('age');

    return (
        <div>Name : {name} / Age : {age}</div>
    )
}
