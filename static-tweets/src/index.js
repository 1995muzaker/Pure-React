import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import moment from "moment";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  return <img src="https://www.gravatar.com/avatar/" className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">Hello</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Muzakeer</span>
      <span className="handle">@shaikh_muzakeer</span>
    </span>
  );
}

const Time = ({ time }) => {
  return <span className="time">3h ago</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
  </span>
);

const LikeButton = () => (
  <span className="like-button">
    <i className="fa fa-heart" />
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet />, document.querySelector("#root"));
