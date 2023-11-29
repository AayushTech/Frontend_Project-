import { useState } from "react";

function App() {
  let [count, setCount] = useState(0); // state variable

  function handleclick() {
    setCount(count + 1); // event handleing function
  }

  function handleminus() {
    setCount(count - 1); // 2nd event handleing function
  }

  return (
    <>
      <h1>Count Button(click to count)</h1>
      <button onClick={handleclick}>click</button>
      <br />
      {count}
      <br />
      <button onClick={handleminus}>click -ve</button>
      <PersonName count={count} />
      {/* this is child component  with a prop inside to pass further  */}
    </>
  );
}

function PersonName(props) {
  return <div>{props.count}</div>;
}

export default App;
