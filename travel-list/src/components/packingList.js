import { useState } from "react";
import Item from "./item";
export default function PackingList({ items, onDeleteItem, onToggle, onClear }) {
  const [sortBy, setSortedBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = items;

  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  // console.log(items)
  return (
    <>
      <div className="list">
        <ul>
          {sortedItem.map((item) => {
            return (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggle={onToggle}
              />
            );
          })}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortedBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort By Packed Status</option>
          </select>

          <button onClick={onClear}>Clear</button>
        </div>
      </div>
    </>
  );
}