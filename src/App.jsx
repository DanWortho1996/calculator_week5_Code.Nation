// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useContext } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count -1)}>
//           - {count}
//         </button>
//         <button onClick={()=> setCount((count) => count +1)}>
//           + {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//Activity 1 Calculator (Complete)
import React, {useState} from 'react';
import './App.css'

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));  // WARNING: eval() can also be dangerous
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1>The Calculator App</h1>
      <div className="display">
        <p>Input</p>
        <input type="text" value={input} readOnly />
        <p>Answer</p>
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        {['1', '2', '3',
        '+',
        '4', '5', '6',
        '-',
        '7', '8', '9',
        '*',
        'C',
        '0',
        '=',
        '/'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;



//Attempt 2
// function App(){
//   const [count, setCount]  = useContext(0);

//   return (
//     <div>
//       <button onClick={() => setCount((count) => count -0)}>
//       </button>
//       <button onClick={() => setCount((count) => count -0)}>
//       </button>
//       <button onClick={() => setCount((count) => count -1)}>
//       </button>
//       <button onClick={() => setCount((count) => count -2)}>
//       </button>
//       <button onClick={() => setCount((count) => count -3)}>
//       </button>
//       <button onClick={() => setCount((count) => count -4)}>
//       </button>
//       <button onClick={() => setCount((count) => count -5)}>
//       </button>
//       <button onClick={() => setCount((count) => count -6)}>
//       </button>
//       <button onClick={() => setCount((count) => count -7)}>
//       </button>
//       <button onClick={() => setCount((count) => count -9)}>
//       </button>
//       <button onClick={() => setCount((count) => count -9)}>
//       </button>

//     </div>
//   )

// }

//Attempt 3 (WORKS) - ADDING ONLY - Keydown function works, i.e, Keyboard press
// import './App.css';
// import React, { useState } from 'react';
// import { useContext } from 'react';

// const App = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(0);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleAddClick = () => {
//     setResult(result + Number(input));
//     setInput('');
//   };

//   const handleClearClick = () => {
//     setInput('');
//     setResult(0);
//   };

//   return (
//     <div>
//       <h2>The Calculator App Adding ONLY</h2>
//       <input
//         type="number"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Enter a number"/>
//       <button onClick={handleAddClick}>Add</button>
//       <button onClick={handleClearClick}>C</button>
//       <div>
//         <h3>Result: {result}</h3>
//       </div>
//     </div>
//   );
// };



// export default App;


//End Part I THINK
// import React from 'react';
// import Calculator from './Calculator';

// function App() {
//   return (
//     <div className="Calculators">
//       <Calculator />
//     </div>
//   );
// }

// export default App;

