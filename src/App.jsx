import { useState } from "react";
import "./App.css";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { Form } from "./Components/Form";
import { TotalMoney } from "./Components/TotalMoney";
import { List } from "./Components/List";

export const App = () => {
  const [entries, setEntries] = useState([]);
  const [filteresArr, setfilteresArr] = useState([]);
  const [balance, setBalance] = useState(0);
  const [pageHome, setPageHome] = useState(true);

  function btnEntries() {
    const arr = entries.filter((item) => item.type === "Entrada");

    if (arr.length){
      return setfilteresArr(arr);
    }else{
      const arrEmpty = [{description: "Não há valores nesta categoria", value: 0, type: "Emprty", uuid: null}]

      return setfilteresArr(arrEmpty)
    }
    
  }

  function btnExits() {
    const arr = entries.filter((item) => item.type === "Saída");

    if (arr.length){
      return setfilteresArr(arr);
    }else{
      const arrEmpty = [{description: "Não há valores nesta categoria", value: 0, type: "Emprty", uuid: null}]

      return setfilteresArr(arrEmpty)
    }
  }

  function btnAll() {
    return setfilteresArr(entries);
  }

  const btnDel = (id) => {
    const arr = entries.filter((item) => item.uuid !== id);
    setfilteresArr(arr);
    setEntries(arr);
  };

  if (pageHome === true) {
    return (
      <div className="App-home">
        <Home setPageHome={setPageHome} />
      </div>
    );
  } else {
    return (
      <div className="App-dashboard">
        <Header setPageHome={setPageHome} />
        <Form
          setEntries={setEntries}
          entries={entries}
          setBalance={setBalance}
        />
        <TotalMoney balance={balance} />
        <List
          entries={filteresArr.length ? filteresArr : entries}
          btnEntries={btnEntries}
          btnExits={btnExits}
          btnAll={btnAll}
          btnDel={btnDel}
          setBalance={setBalance}
        />
      </div>
    );
  }
};
