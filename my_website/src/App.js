import logo from './logo.svg';
import './App.css';
import './AppTTT.css';
import { Button, ButtonGroup, Divider, useTheme } from '@mui/material';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Winner from './pages/BalloonPage';
import React, { useCallback, useEffect, useContext } from 'react';
import BalloonPage from './pages/BalloonPage';
import BalloonProblemPDF from './pages/BalloonProblemPDF.js';
//import Pdf from './assets/TheBalloonProblem.pdf';

function App() {


  // const urlHome = 'https://thejd-droid.github.io/TheJDProjects/'

   return (
    <div className="App" id='root'>
      {/* <BrowserRouter> */}
      <HashRouter basename=''>
      <div className="App-header">
            <Navbar />
      </div>
          <div className="App-body">
          

        {/* <Routes>
          <Route path='' element={<Home />} />
          <Route path='/TicTacToe' element={<TicTacToe/>} />
          <Route path='/BalloonGame' element={<BalloonPage/>} />
        </Routes>
         */}
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/' element={<Home/>} /> */}
            <Route path='' element={<Home />} />
            <Route path='/TicTacToe' element={<TicTacToe/>} />
            <Route path='/BalloonGame' element={<BalloonPage/>} />
            {/* <Route path='/TheBalloonProblem' element={<BalloonProblemPDF />} /> */}
              {/* <Route index element={<Home />} /> */}
              {/* <Route path={urlHome} element={<TicTacToe/>}/> */}
              {/* <Route path={urlHome + 'TicTacToe'} element={<TicTacToe/>}/> */}
              {/* <Route path='https://thejd-droid.github.io/TheJDProjects/' element={<Home/>} /> */}
              {/* <Route path='/JDsProjects' element={<Home />} /> */}
              {/* <Route path='/TicTacToe' element={<TicTacToe />} /> */}
              {/* <Route path='/BalloonPage' element={<BalloonPage />} /> */}
            
          </Routes>        
        </div>
        {/* </BrowserRouter> */}
        </HashRouter>
    </div>
    
  );
  
}

export default App;


