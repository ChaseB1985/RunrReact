import React, { Component } from 'react';

import './login.css';

class App extends Component {
  render() {
    return (

      

      <div className="App">
        
      
      <div className="App__Form">
      

      

      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          




        <div className="FormField">
          <label className="FormField__Label" htmlFor="">E-mail Address</label>
          <input type="text" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
          </div>



          <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Password</label>
          <input type="text" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
          </div>

            <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <a href="#" className="FormField__Link">I'm already a member</a>
          
          </div>
        </form>
      
      </div>
      
      
        
      
      
      </div>
      </div>
    
      
      );
  }
}
export default App;