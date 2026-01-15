import React from "react";
import "./Button.css";

const Button = ({ title = "Button", onClick }) => {
  return (
    <div className="button-page">
      <h1 className="title">{title}</h1>
      <div className="wrapper">
        <button className="button heart" onClick={onClick} />
      </div>
    </div>
  );
};

export default Button;
