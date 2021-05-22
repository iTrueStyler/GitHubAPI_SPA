import React from 'react';
import './app.less';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Redirect,Route, Switch} from 'react-router-dom';
import Main from './main/Main';
import Card from './card/Card';


function App() {
   return (
      <BrowserRouter>
         <div className="container">
         <Switch>
         <Route exact path='/' component={Main}/>
         <Route path='/card' component={Card}/>
         <Redirect to='/'/>
         </Switch>
         </div>

         
      </BrowserRouter>
   )
}

export default App
