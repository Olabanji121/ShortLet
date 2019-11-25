import React, { Component } from "react";
import { Data, FormatData, GetRoom} from "./data";

// with this i have access to provider and consumer
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [...FormatData()],
    sortedRooms: [],
    featuredRooms: FormatData().filter(room => room.featured === true),
    loading: true,
    isLogin: true,
    type: 'all',
    capacity:1,
    price: 0,
    minPrice: 0,
    maxPrice:0,
    location:'all',
    pets: false
  };
   handleChange =(e)=>{
    // const target = e.target
    const value = e.target.value
    const name = e.target.name
    // console.log(`this is type: ${target},this is name: ${name}, this is value: ${value}`);
    this.setState({
      [name]: value
    },this.filterRooms)
  }
  
  filterRooms = ()=>{
    let{
      rooms, type, location, price, pets, minPrice, maxPrice,capacity 
    } = this.state

    // all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity)
    // filter by type 
    if(type !== 'all'){
      tempRooms = tempRooms.filter(room => room.type === type)
    }
    // filter by capacity 
    if (capacity !== 1){
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }
    // filter by location 
    if(location !== 'all'){
      tempRooms = tempRooms.filter(room=>room.location === location)
    }
    this.setState({
        sortedRooms: tempRooms
    })
  }
   
  componentDidMount(){
    let maxPrice = Math.max(...this.state.rooms.map(item => item.price))
    this.setState({...this.state, loading: false,  sortedRooms: [...FormatData()], price:maxPrice})
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: GetRoom,
          setLogin() {
            this.setState({ ...this.state, isLogin: true });
          },
          setLogout() {
            this.setState({ ...this.state, isLogin: false });
          },
          handleChange: this.handleChange

        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// HOC

// export const  withRoomConsumer= (Component)=>{

//   return  function ConsumerWrapper(props){
//       return <RoomConsumer>
//         {value=> <Component {...props} context={value}/>}
//       </RoomConsumer>
//   }

// }

export { RoomProvider, RoomConsumer, RoomContext };
