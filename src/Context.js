import React, { Component } from "react";
// import {  FormatData, GetRoom} from "./data";
import Client from "./Contentful";
// contentful api
// Client.getEntries({
//   content_type: "shortLetNgData"
// })
// .then((response) => console.log(response.items))
// .catch(console.error)

// with this i have access to provider and consumer
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    isLogin: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    location: "all",
    pets: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "shortLetNgData",
        // order: "-fields.price"
      });

      let maxPriceUI = Math.max(...this.state.rooms.map(item => item.price));
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      this.setState({
        ...this.state,
        loading: false,
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        price: maxPriceUI,
        maxPrice: maxPriceUI
      });

      console.log(rooms);
      
    } catch (err) {
      console.error(err);
    }
  };

  formatData = arryItems => {
    let tempItems = arryItems.map(arryItem => {
      let id = arryItem.sys.id;
      let images = arryItem.fields.images.map(image => image.fields.file.url);

      let rooms = { ...arryItem.fields, images, id };

      return rooms;
    });

    return tempItems;
  };

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = e => {
    // const target = e.target
    const value = e.target.value;
    const name = e.target.name;
    // console.log(`this is type: ${target},this is name: ${name}, this is value: ${value}`);
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, type, location, price, capacity } = this.state;

    // all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by location
    if (location !== "all") {
      tempRooms = tempRooms.filter(room => room.location === location);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    // change state
    this.setState({
      sortedRooms: tempRooms
    });
  };

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
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
