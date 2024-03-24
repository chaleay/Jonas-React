import React from "react";

export default function Item({
  item: { id, description, quantity, packed },
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => onToggleItem(id)}
      ></input>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
