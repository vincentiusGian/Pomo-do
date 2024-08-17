import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import DarkMode from "./components/DarkMode";
import Pomodoro from "./components/Pomodoro";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App font-mono">
      <header className="App-header sticky top-0 w-full">
        <div className="navbar bg-base-100 p-4 md:p-10 flex flex-wrap ">
          <div className="flex-1">
            <DarkMode />
          </div>
          <div className="flex-none mt-2 md:mt-0">
            <h2 className="text-lg md:text-xl font-mono">Vincentius Gian</h2>
          </div>
        </div>
      </header>
      <Modal className="text-black p-4" />
      <div className="grid justify-items-center m-4 md:m-10">
        <Pomodoro />
      </div>
      <div className="grid justify-items-center m-4 md:m-10">
        <Todo />
      </div>
    </div>
  );
}

export default App;
