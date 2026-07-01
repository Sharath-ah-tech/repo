import { Component } from 'react';
import Game from './game';
import './App.css';
export default class App extends Component{
  render(){
    return(
      <div>
        <Game />
        <Game />
      </div>
    )
  }
}
