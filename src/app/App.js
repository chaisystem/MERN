
 import React, { Component } from 'react';

class App extends Component{
    render() {
    return (
      <div>
        {/* NAVIGATION */}
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">MERN Stack</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="title" placeholder="Task Title" autoFocus/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="description" cols="30" rows="10" placeholder="Task Description" className="materialize-textarea"></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn light-blue darken-4">Send </button>
                  </form>
                </div>
              </div>
            </div>

          
          </div>
        </div>

      </div>
    )
}
}
export default App;
