import React from 'react';
import Component, {FunctionComponent} from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import Gallery from './component_manage/example/Example1';
import ConditionalRender from './component_manage/example/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/ListRender';

function App() {
  return (
    <>
      {/* <Component />
      <FunctionComponent />
      <CurlyBraces /> 
      <Properties /> 
      <ConditionalRender/>*/}
      <Example2/> 

      {/* <ListRender/> */}
      
    </>
  );
}

export default App;
