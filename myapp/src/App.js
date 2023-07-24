import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import './components/Count.css';
import data from './components/Data';

function App() {
 
  return (
    <div>
      <Count record={data} />
    </div>
  );
}

export default App;

