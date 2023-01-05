import logo from './logo.svg';
import './App.css';
import MainMenu from "./components/MainMenu"
import Button from "react-bootstrap/Button"
import OurStore from "./components/track"
import Search from "./components/search"

function App() {
  return (
    <div className="App">
      <OurStore/>
      <div className="menu ">
        <MainMenu />
      </div>
      <div>
        <Search/>
      </div>


      <h1>React Bootstrap Component</h1>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
