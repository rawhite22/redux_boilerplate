import axios from 'axios';

export const fetchUsersData = () => async (dispatch) => {
  const userData = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  dispatch({
    type: 'GET_USERS',
    payload: {
      users: userData.data,
    },
  });
};

export const changePageNumber = (number) => async (dispatch) => {
  dispatch({
    type: 'CHANGE_PAGE',
    payload: {
      currentPage: number,
    },
  });
};
