import React from "react";

const KratosMessages = ({ messages }) => (
  <div>
    {messages.map(({ text, id, type }) => (
      <div key={id}>{text}</div>
    ))}
  </div>
);

export default KratosMessages