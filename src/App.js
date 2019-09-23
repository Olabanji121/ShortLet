import React, { Component } from 'react'
import './resources/styles.css'
import Header from './components/header_footer/Header'



export default class App extends Component {
  render() {
    return (
      <div className='app' style={{height:"1500px", background:'cornflowerblue'}}>
        <Header />
      </div>
    )
  }
}

