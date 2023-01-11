import './App.css';
import { Terminal } from './terminal';

function App() {
  return (
    <div className="App">
        <Terminal terminalContent={["HelloHelloHelloHelloHello", "World"]} />
    </div>
  );
}

export default App;
