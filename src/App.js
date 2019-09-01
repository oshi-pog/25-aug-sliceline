import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import {Navbar} from './Navbar/Navbar'
import {banner, Banner} from './Banner/banner'
import {Menu} from './Menu/Menu'



function App() {
  return (
  <>
  
  <GlobalStyle/>
  <Navbar></Navbar>
  <Banner></Banner>
  <Menu></Menu>
  </>
  );
}

export default App;
