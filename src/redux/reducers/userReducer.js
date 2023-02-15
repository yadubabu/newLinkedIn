const initialValue = {
  user: null,
};
const userReducers = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };
    default:
      return state;
  }
};
export default userReducers;
