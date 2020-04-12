export default (state = [], action) => {
  let idx;
  let programme;

  switch (action.type) {
    case "ADD_PROGRAMME":
      return state.concat(action.programme);

    case "REMOVE_PROGRAMME":
      idx = state.findIndex((programme) => programme.id === action.programmeId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_PROGRAMME":
      idx = state.findIndex((programme) => programme.id === action.programmeId);
      programme = state[idx];

      return [
        ...state.slice(0, idx),
        Object.assign({}, programme, { votes: (programme.votes += 1) }),
        ...state.slice(idx + 1),
      ];

    case "DOWNVOTE_PROGRAMME":
      idx = state.findIndex((programme) => programme.id === action.programmeId);
      programme = state[idx];

      if (programme.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, programme, { votes: (programme.votes -= 1) }),
          ...state.slice(idx + 1),
        ];
      }

      return state;

    default:
      return state;
  }
};
