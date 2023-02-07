import "./form.css"
import { useState } from "react";
import uuid from "react-uuid";

export const Form = ({ setEntries, entries, setBalance}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function handlesubmit(event) {
    event.preventDefault();

    const entry = {
      description,
      value,
      type,
      uuid: uuid(),
    };

    setEntries([...entries, entry]);
    setDescription("");
    setValue("");

    if (entry.type === "Entrada") {
      setBalance((actualBalance) => actualBalance + Number(entry.value));
    } else {
      setBalance((actualBalance) => actualBalance - Number(entry.value));
    }
  }

  return (
    <form className="form" onSubmit={handlesubmit}>
      <label  htmlFor="description">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <p className="descriotion-ex">Ex: Compra de roupas</p>

      <label htmlFor="value">Valor</label>
      <input
        className="input-value"
        type="number"
        placeholder="R$"
        name="value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <label htmlFor="entry">Tipo de lançamento</label>
      <select
        name="entry"
        id="entry"
        onChange={(event) => setType(event.target.value)}
      >
        <option value="Entrada">Entrada</option>

        <option value="Saída">Saída</option>
      </select>

      <button type="submit">Inserir Valor</button>
    </form>
  );
};
