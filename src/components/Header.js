import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>Task Tracker {title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "ADD"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "",
};

Header.propTypes = { title: PropTypes.string.isRequired };

// const headerStyle={
//     color:'red',backgroundColor:'black'
// }

export default Header;
