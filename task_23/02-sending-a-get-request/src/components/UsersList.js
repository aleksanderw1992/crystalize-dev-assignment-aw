import React from 'react';

import User from './User';
import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    <ul className={classes['users-list']}>
      {props.users.map((user) => (
        <User
          name={user.name}
          email={user.email}
          gender={user.gender}
          status={user.status}
        />
      ))}
    </ul>
  );
};

export default UserList;
