import React, { Component } from 'react';
import {RoomContext} from '../Context';

export default class FeaturedRooms extends Component {

    static contextType = RoomContext
    render() {

        const {} = this.context
        
        return (
            <div>
                
            </div>
        )
    }
}
