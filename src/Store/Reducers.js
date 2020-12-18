export default function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_SCOREBOARD":
      return {
        ...state,
        scoreboard: payload,
      };

    default:
      return state;
  }
}
