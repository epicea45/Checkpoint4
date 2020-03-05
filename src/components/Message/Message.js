import React from 'react';
import './Message.css';

const Message = ({ text, success = true }) => {
  return (
    <div className="response">
      <p style={{ color: success ? 'green' : 'red' }}>{text}</p>
    </div>
  );
};

export default Message;