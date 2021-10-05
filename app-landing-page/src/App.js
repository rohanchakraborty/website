import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage0 from './images/feature_2.png';
import Footer from './Components/Footer';
console.log(aboutimage0);

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={require("./images/Frame19.png")} title='Here comes the sun' button= 'Get in touch' />
      <Footer />
    </div>
  );
}

export default App;
