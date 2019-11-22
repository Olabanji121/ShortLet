import React, { Component } from "react";
// import defaultImg from '../resources';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

export default class SingleRoomComp extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }

  // componentDidMount(){}

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Banck to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      pets,
      images
    } = room;

    return (
      <Hero styleClass="roomsHero">
        <Banner title={`${name} room`}>
        <Link to='/rooms'className="text-uppercase btn btn-primary2  mt-3">back to rooms</Link>
        </Banner>
      </Hero>
    );
  }
}
