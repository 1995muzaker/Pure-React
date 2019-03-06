import React from "react";
import ReactDOM from "react-dom";

export default function Dialog({ title, message, footer }) {
  return (
    <div className="dialog">
        {title}
        {message}
        {footer}
    </div>
  );
}

ReactDOM.render(
  <Dialog />,
  document.querySelector("#root")
);
