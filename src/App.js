import logo from './logo.svg';
import './App.css';
import fakedata from './fakeData.json';
import Demo from './Components/Demo';

function App() {
  let hello= 'hello world'
  const data = [
    {
      "color": "red",
      "value": "#f00"
    },
    {
      "color": "green",
      "value": "#0f0"
    },
    {
      "color": "blue",
      "value": "#00f"
    },
    {
      "color": "cyan",
      "value": "#0ff"
    },
    {
      "color": "magenta",
      "value": "#f0f"
    },
    {
      "color": "yellow",
      "value": "#ff0"
    },
    {
      "color": "black",
      "value": "#000"
    }
  ]
  
  return (
    <div className="App">
      <Demo name={hello} fakeData={data}></Demo>
    </div>
  );
}

export default App;
