import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "./services/api";
import Repository from "./components/Repository";

function App() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    api.get('repositories').then(
      response => setRepositories(response.data)
    );
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Aplicativo ${Date.now()}`,
      url: "http://teste.com",
      techs: ["Tech1", "Tech2"],
      likes: 0
    });
    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`/repositories/${id}`);
    setRepositories(repositories.filter(
      repository => repository.id !== id
    ));
  }

  return (
    <div>
      {repositories.map(repository => (
        <Repository
          title={repository.title}
          id={repository.id}
          key={repository.id}
          handleRemoveRepository={(id) => handleRemoveRepository(id)}
        />
      ))}
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
