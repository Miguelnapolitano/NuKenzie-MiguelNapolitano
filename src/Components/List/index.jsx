import "./list.css";
import { Card } from "../Card";
import noCard from "./../../assets/NoCard.png";

export const List = ({
  entries,
  btnEntries,
  btnExits,
  btnAll,
  btnDel,
  setBalance,
}) => {
  return (
    <div className="resume">
      <h2>Resumo Financeiro</h2>
      <div className="resume-buttons">
        <button type="button" onClick={btnAll}>
          Todos
        </button>
        <button type="button" onClick={btnEntries}>
          Entradas
        </button>
        <button type="button" onClick={btnExits}>
          Saídas
        </button>
      </div>
      <ul>
        {entries.length ? (
          entries.map((entry) => {
            return (
              <Card
                key={entry.uuid}
                description={entry.description}
                value={entry.value}
                type={entry.type}
                id={entry.uuid}
                btnDel={btnDel}
                setBalance={setBalance}
              />
            );
          })
        ) : (
          <li className="noCard">
            <img src={noCard} alt="" />
            <img src={noCard} alt="" />
          </li>
        )}
      </ul>
    </div>
  );
};
