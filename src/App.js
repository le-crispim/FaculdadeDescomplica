import React, { useState } from 'react';
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Se a autenticação for bem-sucedida, defina isAuthenticated como true.
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? <ListarTarefa /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;