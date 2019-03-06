import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var person = {
    name: "Shaikh Muzaker",
    nameTwo: "Chandu",
    address: {
      street: "27th main V.G.S Layout",
      city: "Bangalore Karnataka",
      pinCode: "632 311",
    },
    addressTwo: {
        street: "25th main CN Layout",
        city: "Chittor AP",
        pinCode: "723 112",
    },
  };
  
  function Envelop({ myAddress }) {
  return (
    <div className="my-address">
        <AddressLabel toPerson={myAddress} /><Stamp />
        <AddressLabelTwo fromPerson={myAddress}/>
    </div>
  );
}
function AddressLabel({ toPerson }) {
  return (
    <div className="to-person">
        <p>{toPerson.nameTwo}</p>
        <p>{toPerson.addressTwo.street}.</p>
        <p>{toPerson.addressTwo.city} , {toPerson.addressTwo.pinCode}</p>
    </div>
  );
}

const AddressLabelTwo = ({ fromPerson }) => (
    <div className="from-person">
        <p>{fromPerson.name}</p>
        <p>{fromPerson.address.street}.</p>
        <p>{fromPerson.address.city} , {fromPerson.address.pinCode}</p>
    </div>
);

const Stamp = () => (
   <div className="stamp">stamp</div>
);

ReactDOM.render(<Envelop myAddress={person} />, document.querySelector("#root"));
