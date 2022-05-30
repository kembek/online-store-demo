import React, { FC } from "react";
import "./CardList.styles.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CardList: FC<Props> = ({ children }) => {
  return <div className="card-list">{children}</div>;
};

export default CardList;
