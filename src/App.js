import logo from './logo.svg';
import './App.css';
 let a=10;
 let msg="";
 if(a>5){
  msg="hello";

 }
 else{
  msg="Bye"
 }
function App() {
  return (
    <div className="App">
    <h1>{msg}</h1>
    <h1>{(a>50)?"Hello Siddharth":"Bye Siddharth "}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Siddharth Singh
        </a>
      </header>
    </div>
  );
}

export default App;
