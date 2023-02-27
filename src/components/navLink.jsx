import React from "react";
import { useState } from "react";

const Navlink = (props) => {
  const [active, setActive] = useState(props.active);
  const handleClick = () => {
    setActive((prevState) => !prevState);
  };
  const getClasses = () => {
    let classes = "list-group-item";
    return (classes += active ? " active" : "");
  };

  return (
    <li className={getClasses()} onClick={handleClick}>
      {props.children}
    </li>
  );
};

export default Navlink;
