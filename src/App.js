//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import Header from './component/Header'

function App() {
    return ( 
        <div>
            <Person name="Nasim Ahmed" job="Development"></Person>
            <Person name="Development"></Person>
        </div>
    
    )
}

function Person({name,job}){
    return(<div>
        <h1>{name}</h1>
        <h2>profession:{job}</h2>
        </div>
        
    )
}
export default App;