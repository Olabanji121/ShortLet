import React from 'react'
import RoomFilter from  './RoomsFilter';
import RoomsList from './RoomsList'


const RoomsContainer = () => {
    return (
        <div>
            hello from room container 
            <RoomFilter/>
            <RoomsList/>
        </div>
    )
}

export default RoomsContainer
