import "./card.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({ description, value, type, id, btnDel, setBalance }) => {

  if (type == "Entrada") {
    return (
      <li className="entry" id={id}>
        <div className="stripe-entry"></div>
        <div className="description">
          <h3>{description}</h3>
          <p>{type}</p>
        </div>
        <p className="value">R$ {value}</p>
        <FaTrash
          onClick={() => {
            btnDel(id);
            setBalance((actualBalance) => actualBalance - Number(value));
          }}
        />
      </li>
    );
  } else if (type == "Saída") {
    return (
      <li className="exit" id={id}>
        <div className="stripe-exit"></div>
        <div className="description">
          <h3>{description}</h3>
          <p>{type}</p>
        </div>
        <p className="value">R$ {value}</p>
        <FaTrash
          onClick={() => {
            btnDel(id);
            setBalance((actualBalance) => actualBalance + Number(value));
          }}
        />
      </li>
    );
  } else{
    return (
      <li className="empty">
        <div className="description">
          <h3>{description}</h3>
        </div>
      </li>
    );
  }
};
