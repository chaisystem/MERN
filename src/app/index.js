// alert('alert desde indexjs , aqui a react');

import React, { Component } from 'react'; // 
import { render } from 'react-dom';

// SINTAXIS JSX
class App extends Comment{
    render(){
        return (
            <h1>chaisystem</h1>
        )
    }
}
// SINTAXIS JSX FIN

render(<App/>, document.getElementById('app'))