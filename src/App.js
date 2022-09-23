import logo from './logo.svg';
import './App.css';
import { Greet } from './components/greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App()
{
  return (
    <div className="App">
    <Counter/>

      {/* <Message/> */ }
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is the childern prop</p>
      </Greet>
      <Greet name="Clarck" heroName="Super man" >
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder women" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clarck" heroName="Super man" />
      <Welcome name="Diana" heroName="Wonder women" /> */}
    </div>
  );
}

export default App;
