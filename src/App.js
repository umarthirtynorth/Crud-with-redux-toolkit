import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {addUser , deleteUser, updateEmail} from "./features/User"

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");

  return (
    <div className="App">
      <div className='addUser'>
        <input 
          type="text" 
          placeholder="Name..."  
          onChange={(event) => {setName(event.target.value)}}
        />
        <input 
          type="text"  
          placeholder="email..." 
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <button 
          onClick={() => dispatch(addUser({id:userList[userList.length-1].id+1 , name, email}))}
        > Add User </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) =>{
          return (
            <div>
              <h1>{user.name}</h1>
              <h4>{user.email}</h4>
              <input 
                type="text"  
                placeholder="email..." 
                onChange={(event) => {setNewEmail(event.target.value)}}
              />
              <button onClick={() => {dispatch(updateEmail({id: user.id , email:newEmail}))}}>Update Email</button>
              <button
                onClick={() => dispatch(deleteUser({id: user.id}))}
              >Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
