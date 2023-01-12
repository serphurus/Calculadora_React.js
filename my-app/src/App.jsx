
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='caul-container'>
              <h1>Calculadora</h1>
      <input type="number" name="box" id="box" />
      
      <br/>
      <input type="button" value="9" className='coluwn-1'/>
      <input type="button" value="8" className='coluwn-1'/>
      <input type="button" value="7" className='coluwn-1'/>
      <input type="button" value="/" />
      <br/>
      <input type="button" value="6" />
      <input type="button" value="5" />
      <input type="button" value="4" />
      <input type="button" value="/" />
      <br/>
      <input type="button" value="3" />
      <input type="button" value="2" />
      <input type="button" value="1" />
      <input type="button" value="/" />
      <br/>
      <input type="button" value="0" />
      <input type="button" value="," />
      <input type="button" value="=" />
      <input type="button" value="/" />
        </div>
    </div>
  );
}

export default App;
