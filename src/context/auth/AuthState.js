import React, { useReducer } from "react";
import axios from 'axios'
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
// import setAuthToken from '../../utills/setAuthToken'

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  CLEAR_ERRORS
} from "../../types";

const AuthState = props => {

  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // // Load USER
 
  
  //  REGISTER User
const register = async formData=> {
  const config ={
    headers: {
      'Content-Type' : 'application/json'
    }
  }
 
  try {
    const res = await axios.post('http://localhost:7070/api/v1/users/signup', formData, config)

    dispatch({
      type:REGISTER_SUCCESS,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type:REGISTER_FAIL,
      payload: err.response.data.msg
    })
  }
}
  //  LOgin user
  const login = () => console.log('login');
  // Logout
  const logout = () => console.log('logout');
  // clear errors
  const clearError = () => dispatch({
    type: CLEAR_ERRORS
  })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        // loadUser,
        login,
        logout,
        clearError

      }}
    >
        {props.children}
    </AuthContext.Provider>
  );
};


export default AuthState;