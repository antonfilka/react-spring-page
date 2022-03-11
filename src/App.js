import './App.css';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Cards from "./components/Cards/Cards";

function App() {
    return (<div className="App">
        <Header className="App-header"/>
        <Intro className="App-intro"/>
        <Cards className="App-cards"/>
    </div>);
}

export default App;