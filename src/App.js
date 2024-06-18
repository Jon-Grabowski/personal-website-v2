import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App overflow-hidden">
      <div className='app-wrapper d-flex' style={{minHeight:'100vh'}}>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
