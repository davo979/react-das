import React from 'react';
import './App.css';

//state less component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    country: "armenia"
  }
  constructor(props){
    super(props);
    console.log("constructor");
  }

  componentDidMount () {
    console.log("componentDidMount");
  }

  static getDerivedStateFromProps () {
    console.log("getDeriveStateFromProps");
    return null;
  }

  render () {
    console.log("render")
    return (
      <div>
        hello world
      </div>
    )
  }
}
export default App;
