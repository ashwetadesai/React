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

function Button({children,onClick}){
  return(
  <button className="button" onClick={onClick}>{children}</button>
  )
}

function App() {

  const [showAddFriend, setShowAddFriend] = useState(false)

  function showForm(){
    setShowAddFriend(!showAddFriend)
  }
  return (
   <div className="app">
    <div className="sidebar">
    <FriendsList/>
    {showAddFriend &&  <FormFriend />}
   
    <Button onClick={showForm}>
      {showAddFriend ?'Close' : 'Add Friend'}</Button>
    </div>
   
    <FormsplitBill />
   </div>
  );
}
 
function FriendsList(){
  const friends = initialFriends;
return (
  <ul>
    {friends.map(data=>
      <Friend friend={data} key={data.id}/>
    )}
  </ul>
)
}

function Friend({friend}){
  return(
   <li>
    <img src={friend.image} alt={friend.name}/>
    <h3>{friend.name}</h3>
    {friend.balance < 0  && <p className="red">You own {friend.name} {Math.abs(friend.balance)}💲</p>}
    {friend.balance > 0  && <p className="green">{friend.name} own you  {Math.abs(friend.balance)}💲</p>}
    {friend.balance === 0  && <p >You and {friend.name} are even.</p>}
   
   <Button>Select</Button>
   </li>
  )
}




function FormFriend(){
  return (
    <form className="form-add-friend">
      <label>🤼Friend Name</label>
      <input type='text'/>
      <label>🏝Image Url</label>
      <input type='text'/>
      <Button>Add</Button>
    </form>
  )
}


function FormsplitBill(){
  return (
    <form className="form-add-friend">
      <h2>Split Bill With X</h2>
       <label>💰Friend Name</label>
       <input type='text'/>
       <label>💱Your Expances</label>
       <input type='text'/>
       <label>💱X Expances</label>
       <input type='text' disabled/>

       <label>🤑 Who is paying bill ?</label>
       <select>
        <option value='User'>You</option>
        <option value='friend'>X</option>
       </select>

       <Button>Split Bill</Button>
    </form>
  )
}

export default App;


