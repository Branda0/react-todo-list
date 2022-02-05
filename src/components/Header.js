import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ setNightmode, nightmode }) => {
  return (
    <div className="header">
      <div>
        <FontAwesomeIcon className="icon-header" icon={["far", "list-alt"]} />
        <span className="title-header">Todo List</span>
      </div>
      <div className="header-right">
        <span className="color-mode">{nightmode ? "Dark Mode" : "Light Mode"}</span>
        <div className="color-mode-container">
          <FontAwesomeIcon
            className="icon-sun"
            icon="sun"
            // style={{ color: nightmode && "#9e9e9e" }}
            onClick={(event) => {
              setNightmode(false);
            }}
          />
          <FontAwesomeIcon
            className="icon-moon"
            icon="moon"
            // style={{ color: !nightmode && "#9e9e9e" }}
            onClick={(event) => {
              console.log("moon");
              setNightmode(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
