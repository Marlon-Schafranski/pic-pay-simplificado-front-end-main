import { useEffect, useState } from "react";
import { UserTransferDataMutate } from "../../hooks/UserTransferDataMutate";
import { UserData } from "../../interface/UserData";
import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: unknown): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
        type="text"
      />
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState(0);
  const [balance, setBalance] = useState(0);
  const { mutate, isSuccess } = UserTransferDataMutate();

  const submit = () => {
    const userData: UserData = {
      firstName,
      email,
      document,
      balance,
    };
    mutate(userData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <h2>Cadastre a sua conta</h2>
        <form className="input-container">
          <Input label="nome:" value={firstName} updateValue={setFirstName} />
          <Input label="email" value={email} updateValue={setEmail} />
          <Input label="cpf" value={document} updateValue={setDocument} />
          <Input label="saldo" value={balance} updateValue={setBalance} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Postar
        </button>
      </div>
    </div>
  );
}
