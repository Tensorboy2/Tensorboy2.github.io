import React from 'react';
import './App.css';


function App() {

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='headderText' onClick={() => handleClick('https://youtu.be/jVhlJNJopOQ?si=ZRDxwciBXxjpvmsH')}>Welcome to Tensorboy2s home page</h1>
        <h3>Choose a direction:</h3>
        <div className='buttonWrapper'>
          <div>
            <button type='button' className='linkButton' onClick={() => handleClick('https://tensorboy2.github.io/home2')}>
                {'Normal CV'}
            </button>
          </div>
          <div>
            <button type='button' className='specialcv' onClick={() => handleClick('https://tensorboy2.github.io/home')}>
                {'Special CV'}
            </button>
          </div>
          <div>
            <button type='button' className='linkButton' onClick={() => handleClick('https://tensorboy2.github.io/dino-game')}>
                {'Game'}
            </button>
          </div>
          <div>
            <button type='button' className='linkButton' onClick={() => handleClick('https://tensorboy2.github.io/number_predictor')}>
                {'Number Predictor'}
            </button>
          </div>
          <div>
            <button type='button' className='linkButton' onClick={() => handleClick('https://youtu.be/xvFZjo5PgG0?si=CvQgFjtUV8h9ZxtG')}>
                {'Prank'}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
