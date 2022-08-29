import React from 'react'
import Calculator from './Pages/Calculator'
import HomePage from './Pages/HomePage'
import Stopwatch from './Pages/Stopwatch'
import Erro from './Pages/Erro'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const Menu = styled.nav`
display: flex;
justify-content: space-evenly;
background-color: black;
border: 2px solid goldenrod;
`
const P = styled.p`
color: red;
font-size: 1.2rem;
text-decoration: none;
`
export default function App(){
  return(
      <Router>
        <GlobalStyle />
        <Menu>
          <Link to='/'><P>HOME</P></Link>
          <Link to='/calculator'><P>CALCULADORA</P></Link>
          <Link to='stopwatch'><P>CRONÔMETRO</P></Link>
        </Menu>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
            <Route path="/stopwatch" element={<Stopwatch/>}/>
            <Route path='*' element={<Erro />}/>
          </Routes>
      </Router>
  )
}
