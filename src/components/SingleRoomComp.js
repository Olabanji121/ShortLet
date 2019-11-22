import React, { Component } from 'react';
import defaultImg from '../resources/images/room-12.jpeg';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context'

export default class SingleRoomComp extends Component {

    constructor(props){
        super(props)
        console.log(this.props);
        
    }

    componentDidMount(){}

    static contextType = RoomContext

    render() {
        // const {getRoom} = this.context;
        // const room = getRoom(this.state.slug)
        // console.log(room);
        
        return (
            <div>
                
            </div>
        )
    }
}


