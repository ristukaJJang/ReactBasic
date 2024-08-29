import React from 'react';
import Component, {FunctionComponent} from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import Gallery from './component_manage/example/Example1';
import ConditionalRender from './component_manage/example/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwordingComponent from './interaction/ForwordingComponent';
import HookComponent from './hook/HookComponent';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';
import { Outlet, Route, Routes, useLocation } from 'react-router';
import QueryString from './router/QueryString';
import PathVariable from './router/PathVariable';
import PathMove from './router/PathMove';

// react-router 패키지 : react의 SPA(Single Page Application)에서 라우팅을 구현하기 위한 라이브러리
// - 웹 페이지에서 다양한 경로에 따른 뷰를 관리할 수 있도록 함
// - 웹 애플리케이션 내에서 url 이동이 있을 때 브라우저를 새로고침 하지 않음 (서버로 새로운 요청 보내지 않음)
// - 웹 애플리케이션 내에서 네비게이션 역할 수행

// - npm install react-router react-router-dom 수행
// - root 경로에 있는 index.tsx의 root.render() 안에 <App /> 컴포넌트를 <BrowserRouter> 컴포넌트로 묶어야 함
// <BrowserRouter> : url을 사용하여 브라우저 주소 표시줄에 현재 위치를 저장하고 탐색할 수 있도록 하는 컴포넌트

// 특정 url 패턴에 대해서 컴포넌트를 각각 다르게 렌더링하고자 한다면 
// App.tsx에 <Routes> 컴포넌트와 <Route> 컴포넌트를 사용하여 경로에 따라 컴포넌트 렌더링 가능

// <Routes> : <Route> 컴포넌트로 url에 따른 컴포넌트 렌더링을 할 수 있도록 하는 컴포넌트
// <Route> : url 패턴에 따라 렌더링하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path 속성 : url 패턴 지정
// - element 속성 : 렌더링 할 컴포넌트 지정
// - index 속성 : 현재 경로의 기본 라우터로 지정

function Layout() {

  // useLocation : 현재 경로에 대한 객체를 반환하는 react-router의 hook 함수
  // - pathname : 현재 path
  const {pathname} = useLocation();
  

  // <Outlet> : 부모 <Route>에 컴포넌트가 element로 등록되었을 때
  // 자식 <Route>의 element가 해당 위치에 렌더링되도록 하는 컴포넌트

  return (
    <div>
      <div style={{height:'100px', backgroundColor:'skyblue'}}></div>
      <Outlet />
      <div style={{height:'100px', backgroundColor:'red'}}></div>
  </div>
  )
}

function App() {
  return (
    <Routes>
      <Route index element = {<h1>기본 페이지</h1>}></Route>
      <Route path='/component' element={<Layout />}>
        <Route index element={<Component/>}/>
        <Route path='function-component' element={<FunctionComponent />}></Route>
        <Route path='curlyBraces' element={<CurlyBraces />}></Route>
      </Route>

      <Route path='/router'>
        <Route path='query-string' element={<QueryString/>}/>
        <Route path='path-variable/:name' element={<PathVariable />}/>
        <Route path='path-move' element={<PathMove />}/>
      </Route>

      <Route path='*' element={<h1>404</h1>}/>
      
      {/* <Properties /> 
      <ConditionalRender/>
      <Example2/> 
      <ListRender/> 
      <EventComponent/>
      <StateComponent />
      <ForwordingComponent/>
      <HookComponent2/>
      <CustomHook/>*/}
      
    </Routes >
  );
}

export default App;
