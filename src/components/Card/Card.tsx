import React, { FC } from "react";

import "./Card.styles.css";

interface Props {
  title: string;
  color: string;
  specifications: Record<string, string | number>[];
}

const Card: FC<Props> = ({ title, color, specifications }) => {
  return (
    <div className="card">
      <div className="card__color" style={{ backgroundColor: color }}></div>
      <h4 className="card__title">{title}</h4>
      <ul className="card__specification-list">
        {specifications.map((specification, idx) => (
          <li key={idx} className="card__specification-item">
            <span className="card__specification-key">
              {specification.key}:&nbsp;
            </span>
            <span className="card__specification-value">
              {specification.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
