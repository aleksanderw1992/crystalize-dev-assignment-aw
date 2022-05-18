import React, { useState } from 'react';

import UsersList from './components/UsersList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  function fetchUsersHandler() {
    fetch('https://gorest.co.in/public/v2/users/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedUsers = data.map((userData) => {
          return {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            gender: userData.gender,
            status: userData.status,
          };
        });
        setUsers(transformedUsers);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchUsersHandler}>Fetch Users</button>
      </section>
      <section>
        <UsersList users={users} />
      </section>
    </React.Fragment>
  );
}

export default App;
