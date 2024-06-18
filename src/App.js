import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NameText from './components/Home/Name/NameText';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper d-flex overflow-hidden' style={{minHeight:'100vh'}}>
        <div className='mx-auto mt-5'>
          <NameText />
        </div>
      </div>
    </div>
  );
}

export default App;
