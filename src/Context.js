import React, { Component } from 'react';
import items from './data'

// with this i have access to provider and consumer
const RoomContext = React.createContext()


 class RoomProvider extends Component {

    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
    }

    componentDidMount(){
        let rooms = this.formatData(items)

        // console.log(rooms);

        this.setState({
            rooms,
            sortedRooms: rooms,
            loading: false,
            featuredRooms: rooms.filter(room => room.featured === true )
        })
        
        
        

    }

    formatData=(arryItems)=>{
        let tempItems = arryItems.map(arryItem =>{
            let id = arryItem.sys.id
            let images = arryItem.fields.images.map(image => image.fields.file.url)

            let rooms = {...arryItem.fields, images, id}

            return rooms
        });

        return tempItems

    }

    getRoom=(slug) =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room=> room.slug === slug)
        return room;
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom }}>
               {this.props.children} 
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{ RoomProvider, RoomConsumer, RoomContext } 