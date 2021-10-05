import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface TopNavProps {
  toggleForm: () => void;
}

const TopNavigation: FunctionComponent<TopNavProps> = ({ toggleForm }) => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink to={"/"} className={"indiv"}>
        <button className={"but3"}>главная</button>
      </NavLink>
      <div className={"indiv"}>
        <button className={"but3"} onClick={toggleForm}>
          изменить список категорий
        </button>
      </div>
      <NavLink to={"/stats"} className={"indiv"}>
        <button className={"but3"}>статистика</button>
      </NavLink>
    </div>
  );
};

export default TopNavigation;
