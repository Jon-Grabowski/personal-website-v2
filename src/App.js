import './App.css'
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
