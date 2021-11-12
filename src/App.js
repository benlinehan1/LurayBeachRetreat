import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from './Footer/Footer.js';

class App extends Component {

  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return(
      
        <div className="App">
          <header className="luray header">
            <h1 className="">Luray Beach Retreat</h1>
          </header>
        <Switch>
          <Route path="/">


            <LandingPageContent />
          </Route>





        </Switch>
        

          <Footer />
          
        </div>
      
    )
  } 
}

export default App;
