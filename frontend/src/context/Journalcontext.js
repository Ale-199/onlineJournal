import { createContext, useReducer } from "react";

export const JournalsContext = createContext();

export const journalsReducer = (state, action) => {
  switch (action.type) {
    case "SET_JOURNALS":
      return {
        journals: action.payload,
      };
    case "CREATE_JOURNAL":
      return {
        journals: [action.payload, ...state.journals],
      };
    case "DELETE_JOURNAL":
      return {
        journals: state.journals.filter((j) => j._id !== action.payload._id),
      };
    case "UPDATE_JOURNAL":
      const updatedJournal = action.payload;
      const updatedJournall = state.journals.map((journal) => {
        if (journal._id === updatedJournall._id) {
          return updatedJournal;
        }
        return journal;
      });
      return {
        ...state,
        journals: updatedJournall,
      };
    default:
      return state;
  }
};
