import React from "react";

export function NamePicker({ names }) {
  return (
    <ul>
      {names.map((item) => (
        <li className={item.sex} key={item.id}>
          <button>{item.name}</button>
        </li>
      ))}
    </ul>
  );
}
