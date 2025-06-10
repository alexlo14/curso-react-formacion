import './App.css'
import ComponentePadre from './components/ComponentePadre';
import { useReducer } from "react";
import PokeController from "./components/PokeController";
import PokeContextProvider from "./contexts/PokeContextProvider";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}


function App() {

  return (
    <div>
      <ComponentePadre />
      <Counter />
      <div>
        <PokeContextProvider>
          <PokeController />
        </PokeContextProvider>
      </div>
      
    </div>
  );
}

export default App;
