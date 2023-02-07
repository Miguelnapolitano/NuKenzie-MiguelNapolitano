import "./totalMoney.css"

export const TotalMoney = ({ balance }) => {

  return (
    <div className="total">
      <p>Saldo Total</p>
      <span>{balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </div>
  );
};
