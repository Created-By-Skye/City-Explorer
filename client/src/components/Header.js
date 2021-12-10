import { Component } from "react";
import './App.css'
import  img from './assets/pixelmoon.gif'
class Header extends Component {
render() {
    return (
        <div>
            
            <img src={img} alt="moon" id="pixelmoon"/>
           
            
        <h1 id="header">
        C I T Y  &nbsp;  E X P L O R E R</h1>
        </div>
           ) 
        }

    }


export default Header