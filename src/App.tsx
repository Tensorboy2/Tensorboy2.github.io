import React from 'react';
import './App.css';


function App() {

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tensorboy2s home page</h1>
        <h3>Choose a direction:</h3>
        <div className='buttonWrapper'>
            <button type='button' className='linkButton' onClick={() => handleClick('https://tensorboy2.github.io')}>
                {'Normal CV'}
            </button>
            <button type='button' className='linkButton' onClick={() => handleClick('https://tensorboy2.github.io/home')}>
                {'Special CV'}
            </button>
            <button type='button' className='linkButton' onClick={() => handleClick('https://youtu.be/xvFZjo5PgG0?si=CvQgFjtUV8h9ZxtG')}>
                {'Prank'}
            </button>
        </div>
      </header>
    </div>
  );
}

export default App;