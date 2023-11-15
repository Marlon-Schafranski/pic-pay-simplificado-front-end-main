import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/Card";
import { CreateModal } from "./components/create-modal/create-modal";
import { UserTransferData } from "./hooks/UserTransferData";

function App() {
  const { data } = UserTransferData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handerOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Pic Pay Simplificado</h1>
      <div className="card-grid">
        {data?.map((user) => (
          <Card
            firstName={user.firstName}
            email={user.email}
            document={user.document}
            balance={user.balance}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handerOpenModal} />}
      <button onClick={handerOpenModal}>Cadastrar</button>
    </div>
  );
}

export default App;
