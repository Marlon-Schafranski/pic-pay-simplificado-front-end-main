import "./card.css";

interface CardProps {
  firstName: string,
  email: string,
  document: number,
  balance: number
}

export function Card({ firstName, email, document, balance }: CardProps) {
  return (
    <div className="card">
    <div className="card-body">
      <h2> {firstName}</h2>
      <p><b>Email: </b>{email}</p>
      <p>
        <b>CPF: </b> {document}
      </p>
      <p>
        <b>Saldo: </b>
        {balance}
      </p>
    </div>
  </div>
  );
}
