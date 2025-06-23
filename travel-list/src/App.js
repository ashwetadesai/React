import { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/packingList";
import Stats from "./components/states";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Shirt", quantity: 2, packed: true },
//   { id: 4, description: "T-shirt", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddITems(item) {
    setItems((items) => [...items, item]);
  }

  function onDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function onClear(){

    const confirm= window.confirm('Are you sure you want to Clear?');
    if(confirm)
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddITems} />
      <PackingList
        items={items}
        onDeleteItem={onDeleteItem}
        onToggle={onChecked}
        onClear={onClear}
      />
      <Stats items={items} />
    </div>
  );
}



