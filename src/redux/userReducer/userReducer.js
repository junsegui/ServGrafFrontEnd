const INITIAL_STATE = {
  isLoged: false,
  user: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
