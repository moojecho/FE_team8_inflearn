// action value
const SET_USER = "user/SET_USER";

// action creator
export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

// 초기 상태값
const initialState = {
  user: "",
};

// 리듀서

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export default user;
