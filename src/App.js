import logo from "./logo.svg";

import "./App.css";
import Count from "./compo/Count";
import Counters from "./compo/crud_HLM/counters";

function App() {
    return (
        <div className="App">
            <Counters title="Welcome to my page" />
        </div>
    );
}

export default App;
