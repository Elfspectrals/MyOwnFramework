import React from "react";
import "./style/src/main.scss";

interface ButtonProps {
  label: string;
  hover?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, hover = true }) => {
  return (
    <button className={`button ${hover ? "button-hover" : ""}`}>
      {label}
    </button>
  );
};

export default Button;
