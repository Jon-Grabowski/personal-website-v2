import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App overflow-hidden">
      <div className='app-wrapper d-flex' style={{minHeight:'100vh'}}>
        <div className='border-end' style={{width:'4rem', height:'100%', minHeight:'100vh'}}>

        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;
