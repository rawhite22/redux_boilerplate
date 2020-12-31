const initialState = {
  users: [],
  loading: true,
  currentPage: 1,
  usersPerPage: 2,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.payload.users, loading: false };
    case 'CHANGE_PAGE':
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return { ...state };
  }
};

export default userReducer;
