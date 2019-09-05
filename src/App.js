import React from 'react';
import Head from './compontents/pagesCompontents/mainHead';
import Nav from './compontents/pagesCompontents/subNav';
import routes from "./router/index";
function App() {
  return (
    <div className="App">
      <Head />
      <Nav />
      { routes }
    </div>
  );
}

export default App;
