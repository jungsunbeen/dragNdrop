import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Route path="/" element={<Home/>}></Route>
  );
}

export default App;
