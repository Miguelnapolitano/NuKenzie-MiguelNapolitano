import "./../../index.css";
import "./home.css";
import logo from "./../../assets/logo-dark.png";
import illustration from "./../../assets/illustration.png";
import circles from "./../../assets/circles.png";

export const Home = ({ setPageHome }) => {
  return (
    <div className="home">
      <div className="inf">
        <img src={logo} alt="" />
        <h2>
          Centralize o controle das suas finanças de forma rápida e segura
        </h2>
        <button
          onClick={() => {
            setPageHome(false);
          }}
        >
          Iniciar
        </button>
      </div>
      <img className="illustration" src={illustration} alt="" />
      <img className="circles" src={circles} alt="" />
    </div>
  );
};
