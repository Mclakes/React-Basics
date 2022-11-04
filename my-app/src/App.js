// import './App.css';

import { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./addNinja";
import './index.css';

class App extends Component {
  state = {
    ninjas : [
      { name: "Ryu", age: 30, belt:"black", id: 1},
      { name: "Yoshi", age: 20, belt:"green", id: 2},
      { name: "Crystal", age: 25, belt:"pink", id: 3}
    ]
  }
  addNinja = (ninja) => {
    console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]

    this.setState({ 
      ninjas: ninjas,
    })
  }
  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log("component mounted")
  }
  componentDidUpdate(prevProps, prevState){
    console.log("component Updated");
    console.log(prevProps, prevState);
  }
  render() {
    return(
      <div className="App">
        <h1>My Second React App</h1>
        <p>Welcome 🥰🤗</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja  addNinja={this.addNinja}/>
    </div>
    );
  }
}

export default App;
