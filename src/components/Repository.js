import React from "react";

import "../styles.css";

const Repository = ({ title, id, handleRemoveRepository }) => {

  return (
    <ul data-testid="repository-list">
      <li>
        {title}
        <button onClick={() => handleRemoveRepository(id)}>
          Remover
      </button>
      </li>
    </ul>
  )
};

export default Repository;
