import React, { useEffect } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData, changePageNumber } from './actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUsersData());
    }, 2000);
  }, [dispatch]);
  const { users, loading, currentPage, usersPerPage } = useSelector(
    (state) => state.userData
  );
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (number) => {
    dispatch(changePageNumber(number));
  };

  return (
    <div className='App'>
      <h3>before pagination</h3>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <h3>paginate</h3>
      <Users users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
