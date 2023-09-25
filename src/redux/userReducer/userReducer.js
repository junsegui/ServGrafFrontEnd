const INITIAL_STATE = {
  isLoged: false,
  user: {
    name: "Juan",
    surname: "Segui",
  },
};
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
