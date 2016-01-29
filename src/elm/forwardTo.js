export default (dispatch, ...types) => (action, payload) => {
  const recur = index => {
    if (types.length === index + 1) {
      return {
        type: types[index],
        payload: {
          type: action,
          payload
        }
      };
    } else {
      return {
        type: types[index],
        payload: recur(index + 1)
      };
    }
  };

  dispatch(recur(0));
};
