
 import React, { Component } from 'react';

class App extends Component{
    
    constructor(){
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }   

    addTask(e){
        console.log(this.state);
        // para enviar datos al servidor
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept': 'application/josn',
                'Content-Type': 'application/json'
            }            
        }) 
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'Task Saved'}); // muestra notificacion
                this.setState({title:'',description:''}); // limpia campos

            })
            .catch(err => console.log(err));  // then promesa

        e.preventDefault();
    }

    componentDidMount() {
        console.log('like docuemnt ready in jq');
        this.fetchTasks();
    }

    fetchTasks(){
        // fetch por default hace una peticion get por lo tanto no es necesario headers ...
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => console.log(data))          
    }
    handleChange(e){
        // console.log(e.target.name);
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }

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
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="title" onChange={this.handleChange} placeholder="Task Title" value={this.state.title} autoFocus/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="description" onChange={this.handleChange} cols="30" rows="10" placeholder="Task Description" value={this.state.description} className="materialize-textarea"></textarea>
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
