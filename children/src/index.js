import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dialog from './dialog-component/index';

function IconButton({ children }) {
  return (
    <div style={{ margin: "50px 0px"}}>
      <button className="warning">
        <img src="https://image.flaticon.com/icons/svg/272/272340.svg" alt="warning" />
        {children}
      </button>
      <Dialog title={<h2>This is important</h2>} message={<p>Here is some important text or enter or something.</p>} footer={<button>close</button>} />
    </div>
  );
}

ReactDOM.render(
  <IconButton children={<p>World is going to End</p>} />,
  document.querySelector("#root")
);
