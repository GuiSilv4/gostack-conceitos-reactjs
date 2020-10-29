import React from "react";

const Repository = ({ title, id, onClick }) => {
  return (
    <li>
      {title}
      <button onClick={() => onClick(id)}>
        Remover
      </button>
    </li>
  )
};

export default Repository;
