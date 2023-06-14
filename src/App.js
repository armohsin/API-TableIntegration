import { useEffect, useState } from 'react';
import logo from './logo.svg';
import UserData from './Component/UserData';
const API = "https://jsonplaceholder.typicode.com/users";

function App() {

  const[Users,SetUsers]=useState([]);

  const fetchUsers = async (URL) => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
          if(data.length>0)
          {
            SetUsers(data)
          }
        // console.log(data);
    } catch (e) {
        console.error(e)
    }
}

  useEffect(() => {
    fetchUsers(API);
  
  }, [])
  

  return (
   <div>
      <h1>React Table Api Integration</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={Users} />
        </tbody>
      </table>
   </div>
  );
}

export default App;
