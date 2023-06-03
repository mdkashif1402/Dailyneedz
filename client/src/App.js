import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';

function App() {
  var btn = document.getElementById("btn");
  function leftclick() {
    btn.style.left = '0'
  }
  function rightclick() {
    btn.style.left = '110px'
  }
  return (
    <div className="App">
      <div>
        <Header />
        <div className='form-box'>
          <div className='button-box'>
            <div id='btn'></div>
            <button type='button' className='toggle-btn' onClick={leftclick}>Customer</button>
            <button type='button' className='toggle-btn' onClick={rightclick}>Vendor</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
