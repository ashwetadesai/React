export default function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
        <button onClick={() => onDeleteItem(item.id)}>❌&nbsp;</button>
      </span>
    </li>
  );
}