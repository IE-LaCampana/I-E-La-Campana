import React from 'react'
import "./Button.css";

const Button = ({label, onClick, type="button", className = ''}) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {label}
      <svg
        className="project-card__button-icon"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14m-7-7 7 7-7 7" />
      </svg>
    </button>
  );
}

export default Button