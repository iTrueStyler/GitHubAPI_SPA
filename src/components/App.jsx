import React from 'react';
import './app.less';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Main from './main/Main';


function App() {
   return (
      <BrowserRouter>
         <div className="container">
         <Route path='/' component={Main}/>
         </div>

         
      </BrowserRouter>
   )
}

export default App
