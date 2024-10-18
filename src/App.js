import React from 'react';
import './App.css';
import Label from './Component/Label';
import PasswordComponent from './Component/PasswordComponent';
// Hooks
// state, useEffect, useContext, useReducer, useRef, useMemo, useCallback
function App() {
  const [count, setCount] = React.useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <button onClick = {clickHandler}>
        Click Me 
      </button>
      <p> {count} </p>
      <Label title = "Enter your Name"/>
      <PasswordComponent />
    </div>
  );
}

export default App;
