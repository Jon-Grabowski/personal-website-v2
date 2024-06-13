import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Name from './components/Name';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper' style={{minHeight:'100vh'}}>
        <Name />
        {/* <Navbar />
        <Content /> */}
      </div>
    </div>
  );
}

export default App;
