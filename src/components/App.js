import React from 'react';
import Header from './Header';
import KegControl from './KegControl';
import background from ".././img/jon-tyson-s2ryvZkG1Rk-unsplash.jpg";

function App() {
  return (
    <>
      <div class="container" style={{backgroundImage: `url(${background}` }}>
        <Header />
        <KegControl />
      </div>
    </>
  );
}

export default App;