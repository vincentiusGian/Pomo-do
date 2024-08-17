import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import DarkMode from "./components/DarkMode";
import Pomodoro from "./components/Pomodoro";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="App font-mono">
      <header className="App-header">
        <div className="navbar bg-base-100 p-10">
          <div className="flex-1">
            <DarkMode />
          </div>
          <div className="flex-none">
            <h2 className="text-xl font-mono">Vincentius Gian</h2>
          </div>
        </div>
      </header>
      <Modal className="text-black" />
      <div className="grid  justify-items-center m-10">
        <Pomodoro/>
      </div>

      <div className="grid  justify-items-center m-10">
          <Todo/>
      </div>
    </div>
  );
}

export default App;
