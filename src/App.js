import './App.css';
import Box from "./component/Box";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
      dispatch({ type: 'INCREMENT' }); // type은 action의 이름 // dispatch가 action으로 전달
  };

  const decrease = () => {
      dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
      dispatch({ type: 'RESET' });
  };

  return (
      <div>
          <h1>{count}</h1>
          <button onClick={increase}>증가</button>
          <button onClick={decrease}>감소</button>
          <button onClick={reset}>초기화</button>
          <Box/>
      </div>
  );
}

export default App;
