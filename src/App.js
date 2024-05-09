import './App.css';
import Box from "./component/Box";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
      dispatch({ type: 'INCREMENT', payload: {num: 5} });
      // type은 action의 이름 // dispatch가 action으로 전달
      // payload는 함수에서 매개변수와 같은 존재, 필요한 정보를 보낸다.
  };

  const decrease = () => {
      dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
      dispatch({ type: 'RESET' });
  };

  const login = () => {
      dispatch({type: 'LOGIN', payload: {id: 'cme', pwd: '111'}});
  };
  const logout = () => {
      dispatch({type: 'LOGOUT', payload: {id: null, pwd: null}});
  };

  return (
      <div>
          <h1>{count}</h1>
          <button onClick={increase}>증가(+5)</button>
          <button onClick={decrease}>감소(-1)</button>
          <button onClick={reset}>초기화(0)</button>
          <Box/>

          <button onClick={login}>Login</button>
          <button onClick={logout}>Login</button>
      </div>
  );
}

export default App;
