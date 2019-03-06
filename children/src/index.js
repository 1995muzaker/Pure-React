import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function IconButton({ children }) {
  return (
    <div style={{ margin: "50px 0px"}}>
      <button class="warning">
        <img src="https://image.flaticon.com/icons/svg/272/272340.svg" alt="warning" />
        {children}
      </button>
    </div>
  );
}

ReactDOM.render(
  <IconButton children={<p>World is going to End</p>} />,
  document.querySelector("#root")
);
