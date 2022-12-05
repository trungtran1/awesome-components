import { Button } from 'awesome-test-components';
import { useCallback } from 'react';
import './App.css';

function App() {
  const handleClick = useCallback(() => {
    console.log('CLICK NE');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Button id="btn-1" type="success" name="TEST NPM" value="TEST NPM" disabled={false} handleClick={handleClick} label="TEST NPM LABEL" />
      </header>
    </div>
  );
}

export default App;
