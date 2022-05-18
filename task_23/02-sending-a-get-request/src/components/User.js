import React from 'react';

import classes from './User.module.css';

const User = (props) => {
  return (
    <li className={classes.user}>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <p>{props.status}</p>
      <p>
        <img src={props.gender + '.png'} alt={props.gender} width="128" height="128"></img>
      </p>
    </li>
  );
};

export default User;
