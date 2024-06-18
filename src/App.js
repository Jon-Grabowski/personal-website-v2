import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App overflow-hidden">
      <div className='app-wrapper d-flex' style={{minHeight:'100vh'}}>
        <Home />
      </div>
    </div>
  );
}

export default App;
