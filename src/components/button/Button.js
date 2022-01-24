import React from 'react';

const Button = ({ text, action=()=>{} }) => {
  return <button className="btn" onClick={action}>{text}</button>;
};

export default Button;
