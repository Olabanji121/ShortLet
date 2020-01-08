import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Checkbox, TextArea } from "semantic-ui-react";
import { RoomContext } from "../Context";
import AuthContext from '../context/auth/AuthContext'
import BookHero from "../components/BookHero";
import AlertContext from '../context/alert/AlertContext'

 const Booking = (props)=> {
  
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)
  const rooContext = useContext(RoomContext)
  
  const [book, setBook] = useState({
    slug: props.match.params.slug,
      email: "",
      fullname: "",
      phonenumber: "",
      // numberOfDays: 1,
      totalPrice: 0,
      city: false,
      more: "",
      taxi: false,
      cleaning: false,
      terms: false,
      roomname: ""

  });

  const {setAlert} = alertContext
  const {register, error, clearError, isAuthenticated} = authContext
  const { slug, email, fullname, totalPrice, city, more, taxi, cleaning, terms, roomname} = book
  const { getRoom } = rooContext;
  
  let room = getRoom(slug); 
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(book);
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.id]: e.target.value });
  };

  const handleCheck = e => {
    setBook({ ...book,
      terms: true,
      city: true,
      taxi: true,
      cleaning: true
    });
  };

  const totalamount = (price, days) => {
    let total = days * price;

    return total;
  };

 
  

    
    const { name, capacity, price, images } = room;
    

    return (
      <BookHero
        img={images[3] }
        // styleClass="roomsHero"
      >
        <div className="container ">
          <div className="row">
            <div
              className=" col-10 col-sm-6 center mx-auto bg-light pb-5"
              // style={{ padding: "18% 0" }}
            >
              {/* <h1 className="text-center text-capitalize pt-3">BOOK NOW</h1> */}
              <h1 className="text-center text-capitalize pt-3 text-color">
                {name}
              </h1>
              <h3 className="text-center text-capitalize pt-3">
                {" "}
                capacity {capacity} Guest
                <span style={{ fontSize: "20px" }}>(s)</span>
              </h3>
              <h4 className="text-center pt-3 text-color">
                &#8358;
                {parseFloat(price)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                <span className="text-small">/ day</span>
              </h4>

              <p className="text-center ">
                Total Payable Amount (Apartment only):{" "}
                <span className="text-color">
                  &#8358;
                  {parseFloat(totalPrice)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>

              <Link
                to={`/rooms/${slug}`}
                className="text-uppercase btn btn-primary2 "
              >
                Back to Apartment
              </Link>
            </div>
            <div
              className=" col-10 col-sm-6 mx-auto bg-light pb-5"
              style={{ paddingTop: "5%" }}
            >
              <Form onSubmit={handleSubmit} className="ui form">
                <div className="field ">
                  <Form.Field>
                    <label htmlFor="roomname">Room Name :</label>
                    <input
                      type="text"
                      id="roomname"
                      value={name}
                      onChange={e=> setBook({
                        ...book, roomname: name
                      })}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="fullname">Full Name :</label>
                    <input
                      type="text"
                      id="fullname"
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="phonenumber">Phone Number :</label>
                    <input
                      type="number"
                      id="phonenumber"
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="numberOfDays">Number of Days :</label>
                    <input
                      type="number"
                      id="numberOfDays"
                      onChange={e => {
                        let days = e.target.value;
                        let total = totalamount(price, days);
                        setBook({
                          ...book,
                          totalPrice: total,
                          numberOfDays: days
                        });
                      }}
                    />
                  </Form.Field>
                  <TextArea
                    placeholder="Tell us more"
                    id="more"
                    onChange={handleChange}
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <Checkbox
                      label="Taxi Ride"
                      id="taxi"
                      onClick={handleCheck}
                    />
                  </div>
                  <div className="col">
                    <Checkbox
                      label="Cleaning Services"
                      id="cleaning"
                      onClick={handleCheck}
                    />
                  </div>
                  <div className="col">
                    <Checkbox
                      label="City Tour"
                      id="city"
                      onClick={handleCheck}
                    />
                  </div>
                </div>
                <hr></hr>
                <Form.Field
                  control={Checkbox}
                  label="I agree to the Terms and Conditions"
                  id="terms"
                  onClick={handleCheck}
                />
                <div className="field mx-auto">
                  <button className="text-uppercase  btn-primary2 btn-block ">
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

export default  Booking