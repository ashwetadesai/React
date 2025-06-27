import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriend] = useState(initialFriends);
  const [selectedfriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function showForm() {
    setShowAddFriend(!showAddFriend);
  }

  function handleBillForm(friend) {
    setSelectedFriend((cur)=> (cur?.id === friend.id ? 'null' : friend));
    setShowAddFriend(false)
  }

  function handleSplitBill(value){
   setFriend((friends)=>
    friends.map((friend)=> 
    friend.id === selectedfriend.id 
    ? {...friend,balance:friend.balance+value} 
    : friend)
   );
    
   setSelectedFriend(null)
  }
  return (
    <div className="app">


      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleBillForm={handleBillForm}
          selectedfriend={selectedfriend}
        />
        {showAddFriend && <FormFriend onFriendAdd={handleAddFriend} />}

        <Button onClick={showForm}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedfriend && <FormsplitBill selectedfriend={selectedfriend}  onSplitBill={handleSplitBill}/>}
    </div>
  );
}

function FriendsList({ friends, handleBillForm, selectedfriend }) {
  // const friends = initialFriends;
  return (
    <ul>
      {friends.map((data) => (
        <Friend
          friend={data}
          key={data.id}
          onClickShow={handleBillForm}
          selectedfriend={selectedfriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onClickShow, selectedfriend }) {
  const isSelected = selectedfriend && selectedfriend.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You own {friend.name} {Math.abs(friend.balance)}💲
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} own you {Math.abs(friend.balance)}💲
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

      <Button onClick={() => onClickShow(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormFriend({ onFriendAdd }) {
  const [name, setName] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48");

  function handleFunction(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };

    onFriendAdd(newFriend);
    setName("");
    setimage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend">
      <label>🤼Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🏝Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button onClick={handleFunction}>Add</Button>
    </form>
  );
}

function FormsplitBill({ selectedfriend,onSplitBill }) {
const [bill, setBill]= useState('');
const [paidByUser, setPaidByUser] = useState('');

const paidByFriend = bill ? bill - paidByUser : '';
const [whoIsPaying, setWhoIsPaying] = useState('User')

function handleSubmitBillForm(e){
  e.preventDefault();
   if(!bill || !paidByUser || paidByUser > bill) return;
   onSplitBill(whoIsPaying === 'User' ? paidByFriend : -paidByUser)
}
  return (
    <form className="form-add-friend">
      <h2>Split Bill With {selectedfriend.name}</h2>
      <label>💰Bill Value</label>
      <input type="text" value={bill} onChange={(e)=> setBill(Number(e.target.value))} />
      <label>💱Your Expances</label>
      <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value) )}/>
      <label>💱{selectedfriend.name}'s Expances</label>
      <input type="text" value={paidByFriend} disabled />

      <label>🤑 Who is paying bill ?</label>
      <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
        <option value="User">You</option>
        <option value="friend">{selectedfriend.name}</option>
      </select>

      <Button onClick={handleSubmitBillForm}>Split Bill</Button>
    </form>
  );
}

export default App;
