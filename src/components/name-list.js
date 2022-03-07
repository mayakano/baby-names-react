import React from "react";

export function NameList({ nameList, onItemClick }) {
  return (
    <ul>
      {nameList.map((item) => (
        <li className={item.sex} key={item.id}>
          <button onClick={() => onItemClick(item.id)}>{item.name}</button>
        </li>
      ))}
    </ul>
  );
}
