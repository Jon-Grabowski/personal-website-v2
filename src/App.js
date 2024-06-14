import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Name from './components/Name';
import NameText from './components/NameText';

import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper d-flex overflow-hidden' style={{minHeight:'100vh'}}>
        <div className='mx-auto mt-5'>
          <NameText />
        </div>
        {/* <Navbar />
        <Content /> */}
      </div>
    </div>
  );
}

export default App;
