import React, { Component } from "react";
import { Data, FormatData, GetRoom } from "./data";

// with this i have access to provider and consumer
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [...FormatData()],
    sortedRooms: [...FormatData()],
    featuredRooms: FormatData().filter(room => room.featured === true),
    loading: false,
    isLogin: false
  };

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
          }
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
