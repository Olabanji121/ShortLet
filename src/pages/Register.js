import React, { Component } from "react";
import { Form, Checkbox } from "semantic-ui-react";
export class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      email: "",
      password: "",
      firstname:"",
      lastname:"",
      conpassword:""
  
    };
  }
  
  handleSubmit = async(e) => {
    e.preventDefault()
    const {email, password, firstname, lastname, conpassword}= this.state;
    const {router} = this.props

    
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="container ">
        <div className=" col-8 col-sm-6 mx-auto" style={{ paddingTop: "15%" }}>
          <h2 className="text-center text-capitalize pb-5">register</h2>
          <Form onSubmit={this.handleSubmit} className="ui form">
            <div className="field ">
              <Form.Field>
                <label htmlFor="firstname">First Name :</label>
                <input type="text" id="firstname" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="lastname">Last Name :</label>
                <input type="text" id="lastname" onChange={this.handleChange} />
              </Form.Field>
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
              <Form.Field>
                <label htmlFor="conpassword">Confirm Password :</label>
                <input
                  type="password"
                  id="conpassword"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </div>
            
            <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
            <div className="field mx-auto">
              <button className="ui orange button btn-block text-capitalize ">
                register
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register ;
