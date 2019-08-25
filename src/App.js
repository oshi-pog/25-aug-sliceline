import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Navbar} from './Navbar/Navbar'
import {banner, Banner} from './Banner/banner'

//Defining the global style
const GlobalStyle = createGlobalStyle`
  body {
    
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }

  * {
    margin:0;
  }
`;

function App() {
  return (
  <>
  
  <GlobalStyle/>
  <Navbar></Navbar>
  <Banner></Banner>
  <div>Hello Sliceline</div>
  </>
  );
}

export default App;
