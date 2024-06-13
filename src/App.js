import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Name from './components/Name';
import NameV2 from './components/NameText';
import NameUnderLines from './components/NameUnderLines';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App align-items-center">
      <div className='app-wrapper d-flex align-items-center overflow-hidden' style={{minHeight:'100vh'}}>
        <div className='m-auto'>
          <NameV2 />
          <NameUnderLines />
        </div>
        {/* <Navbar />
        <Content /> */}
      </div>
    </div>
  );
}

export default App;
