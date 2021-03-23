import React from 'react'
import { Switch,Route} from "react-router-dom";
import './App.css'
import NavBar from './component/NavBar/NavBar';
import MovieApp from './component/MovieApp'
import Movie from './component/Movie/Movie';
import Errors from '../src/assets/404.jpg'

export default function App () {


    return (
      <div className='App'> 
      
        <NavBar/>
         <Switch>
           <Route exact path='/' component={MovieApp} />
           <Route exact path='/movies:id' component={Movie} />
           <Route path='/*' render={()=> <img src={Errors} alt='Errors 404'/>} />
         </Switch>

      </div>
    )
  
}
