import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Comment{
    render(){
        return (
            <h1>chaisystem</h1>
        )
    }
}

render(<App/>, document.getElementById('app'));