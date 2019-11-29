import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = async(e) => {
    e.preventDefault()
    const {email, password}= this.state;

    
    console.log(this.state);
  };

  handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      })
  };


 
  render() {
    return (
      
        <div className="container " >
          <div className=" col-8 col-sm-6 mx-auto" style={{paddingTop: "20%"}}>
          <h2 className="text-center text-capitalize pb-5">login</h2>
          <Form onSubmit={this.handleSubmit} className="ui form">
            <div className="field ">
              <Form.Field>
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </div>
            <div className="field mx-auto">
              <button className="ui orange button btn-block text-capitalize ">
                login
              </button>
            </div>
          </Form>
          </div>
          
        </div>
      
    );
  }
}

export default Login;
