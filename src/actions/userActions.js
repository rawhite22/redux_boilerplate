import axios from 'axios';

export const fetchUsersData = () => async (dispatch) => {
  const userData = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  console.log(userData);
  dispatch({
    type: 'GET_USERS',
    payload: {
      users: userData.data,
    },
  });
};
