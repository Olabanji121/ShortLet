import React from "react";
import { Redirect} from 'react-router-dom'

import axios from 'axios';
// import {showAlert} from './alert'

 export const login = async (email, password) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:7070/api/v1/users/login',
        data: {
          email,  
          password
        }
      });
  
      console.log(res);
  
      if (res.data.status === 'success') {
       console.log('success');

       return <Redirect to={{
        pathname: '/login',
        // state: { from: props.location }
      }}/>
       
      }
    } catch (err) {
      console.log(err);
      
    }
  };
   