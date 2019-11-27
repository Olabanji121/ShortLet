import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Checkbox, TextArea } from "semantic-ui-react";
import { RoomContext } from "../Context";
import BookHero from "../components/BookHero";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      email: "",
      fullname: "",
      phonenumber: "",
      numberOfDays: 1,
      // totalPrice: 0,
      city: false,
      more: "",
      taxi: false,
      cleaning: false,
      terms:false,

    };
  }

 
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleCheck= e=>{
    this.setState({
      terms: true,
      city: true,
      taxi: true,
      cleaning: true,

    })
  }
  totalamount =(price)=>{
    let total =  this.state.numberOfDays * price;
    
    return total
    
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    let room = getRoom(this.state.slug);
    console.log(getRoom(this.state.slug));
    // console.log(room);
    const { name, capacity, price, images } = room;
    // console.log(
    //   `name:${name} capacity:${capacity} price:${price} image:${images[0]} location:${location}`
    // );
    
    // console.log(this.state);
    
    
    return (
      <BookHero
        img={images[3] || this.state.defaultImg}
        // styleClass="roomsHero"
      >
        <div className="container ">
          <div className="row">
            <div
              className=" col-10 col-sm-6 center mx-auto bg-light pb-5"
              // style={{ padding: "18% 0" }}
            >
              {/* <h1 className="text-center text-capitalize pt-3">BOOK NOW</h1> */}
              <h1 className="text-center text-capitalize pt-3 text-color">{name}</h1>
              <h3 className="text-center text-capitalize pt-3">
                {" "}
                capacity {capacity} Guest<span style={{fontSize:"20px"}}>(s)</span>
              </h3>
              <h4 className="text-center pt-3 text-color">
                &#8358;
                {parseFloat(price)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                <span className="text-small">/ day</span>
              </h4>

              <p className="text-center ">Total Payable Amount (Apartment only): <span className="text-color">
              &#8358;
                {parseFloat(this.totalamount(price))
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span></p>

                <Link to={`/rooms/${this.state.slug}`} className="text-uppercase btn btn-primary2 ">
              Back to Apartment
            </Link>
            </div>
            <div
              className=" col-10 col-sm-6 mx-auto bg-light pb-5"
              style={{ paddingTop: "5%" }}
            >
              <Form onSubmit={this.handleSubmit} className="ui form">
                <div className="field ">
                  <Form.Field>
                    <label htmlFor="fullname">Full Name :</label>
                    <input
                      type="text"
                      id="fullname"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="phonenumber">Phone Number :</label>
                    <input
                      type="number"
                      id="phonenumber"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="numberOfDays">Number of Days :</label>
                    <input
                      type="number"
                      id="numberOfDays"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <TextArea placeholder="Tell us more" id="more"  onChange={this.handleChange}/>
                </div>

                <div className="row">
                  <div className="col">
                    <Checkbox label="Taxi Ride" id="taxi"  onClick={this.handleCheck} />
                  </div>
                  <div className="col">
                    <Checkbox label="Cleaning Services" id="cleaning" onClick={this.handleCheck} />
                  </div>
                  <div className="col">
                    <Checkbox label="City Tour" id="city"  onClick={this.handleCheck}/>
                  </div>
                </div>
                <hr></hr>
                <Form.Field
                  control={Checkbox}
                  label="I agree to the Terms and Conditions" id="terms"  onClick={this.handleCheck}
                />
                <div className="field mx-auto">
                  <button className="text-uppercase  btn-primary2 btn-block " >
                    book now
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </BookHero>
    );
  }
}
