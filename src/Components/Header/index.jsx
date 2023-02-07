import logo from "./../../assets/logo.png";
import "./header.css"

export const Header = ({ setPageHome }) => {
  return (
    <nav>
      <img src={logo} alt="" />
      <button
        type="button"
        onClick={() => {
          setPageHome(true);
        }}
      >
        Início
      </button>
    </nav>
  );
};
