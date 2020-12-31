import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from './actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);
  const { users } = useSelector((state) => state.userData);
  console.log(users);
  return (
    <div className='App'>
      <p>Redux</p>
      <hr />
      {users.map((user) => (
        <div>
          <p>Name: {user.name}</p>
          <p>City: {user.address.city}</p>
          <p>Suite: {user.address.suite}</p>
          <p>Street: {user.address.street}</p>
          <p>Company: {user.company.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
