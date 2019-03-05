import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var person = {
    name: "Shaikh Muzaker",
    address: {
      street: "27th main V.G.S Layout",
      city: "Bangalore Karnataka",
      pinCode: "632 311"
    },
  };
  

function AddressLabel({ myaddress }) {
    // const {street, city, pinCode} = address;
  return (
    <div className="my-address">
        <p>{myaddress.name}</p>
        <p>{myaddress.address.street}.</p>
        <p>{myaddress.address.city} , {myaddress.address.pinCode}</p>
    </div>
  );
}

ReactDOM.render(<AddressLabel myaddress={person} />, document.querySelector("#root"));
