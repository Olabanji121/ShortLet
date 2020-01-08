import React, { useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";
import { signup } from "./../js/signup";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  const {email, password } = user;

  const handleSubmit = async e => {
    e.preventDefault();

    // signup({ name, email, password, passwordConfirm });
    console.log(user);
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="container " >
          <div className=" col-8 col-sm-6 mx-auto" style={{paddingTop: "20%"}}>
          <h2 className="text-center text-capitalize pb-5">login</h2>
          <Form onSubmit={handleSubmit} className="ui form">
            <div className="field ">
              <Form.Field>
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" onChange={handleChange} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  id="password"
                  onChange={handleChange}
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
};

export default Login;
