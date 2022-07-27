import "./App.css";
import UseAxiosGetComponent from "./UseAxiosExample/UseAxiosGetComponent";
import UseStateExample from "./UseStateExample/UseStateExample";
import ToggleComponent from "./UseToggleExample/ToggleComponent";
import ToggleComponentNoCustomHook from "./UseToggleExample/ToggleComponentNoCustomHook";

function App() {
    return (
        <div className="App">
            <UseStateExample />
            <ToggleComponentNoCustomHook />
            <ToggleComponent />
            <UseAxiosGetComponent />
        </div>
    );
}

export default App;
