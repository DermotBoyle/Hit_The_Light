export default function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_SCOREBOARD":
      return {
        ...state,
        scoreboard: payload,
      };

      case "UPDATE_CURRENT_USER_SCORE":
        return {
          ...state,
          currentUser: payload,
        };

        case "UPDATE_USER_POSITION":
          return {
            ...state,
            userPosition: payload,
          }

    default:
      return state;
  }
}
