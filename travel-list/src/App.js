import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shirt", quantity: 2, packed: true },
  { id: 4, description: "T-shirt", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form() {

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function onFormSubmit(e){
     e.PreventDefault();

     const newItem = {description,quantity,packed:false,id:Date.now()}
     setDescription = "";
     setQuantity = 1;
  }
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip? </h3>
      <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="item..."  value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button onClick={onFormSubmit}>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} key={item.id}/>;
        })}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🛍 You have X items in your list, and you already packed X (%X)</em>
    </footer>
  );
}

function Item({ item }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span>
        {" "}
        {item.quantity} {item.description} <button>❌&nbsp;</button>
      </span>
    </li>
  );
}
