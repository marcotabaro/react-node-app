import React from 'react';
import boringLogo from './img/boringLogo.png';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <wrapper>
      <div className="App">
        <header className="App-header">
          <img src={boringLogo} className="App-logo" alt="logo" />
          <p>{!data ? "Don't get bored while you wait..." : data}</p>
        </header>
      </div>
    </wrapper>
  );
}

export default App;
