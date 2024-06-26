import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar';
import './App.css'

function App() {
  return (
    <div className="App overflow-hidden">
      <div className="app-wrapper" >
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
