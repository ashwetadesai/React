// import "./App.css";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <h1>Header</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 >Fast React Pizza Company</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

       
          
      {numPizzas > 0 ? (
<>
        <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
      <ul className="pizzas">
        {pizzaData.map((pizza)=>(
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      </>
      ): <p>We are working on our menu please come back later :)</p>}
      
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhours = 12;
  const closehours = 22;
  const isOpen = hour >= openhours && hour <= closehours;
  return (
    <footer> 
      {isOpen ? (
        <div className="order">
          <p>We are open untill {closehours}:00. Come visit us or order online.</p>
          <button className="btn">Order now</button>
        </div>
        
      ):<p>We are happy to welcome you inbetween {openhours}:00 to {closehours}:00 :)</p>}
    </footer>
  );
}

function Pizza({pizzaObj}) {
  // console.log(props)
  // if(pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <h2>{pizzaObj.name}</h2>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price +3}</span>
    </li>
  );
}

export default App;
