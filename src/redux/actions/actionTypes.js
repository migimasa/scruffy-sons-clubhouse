export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

export const LOAD_CHARACTERS_SUCCESS = "LOAD_CHARACTERS_SUCCESS";
export const LOAD_CHARACTER_BACKGROUNDS_SUCCESS =
  "LOAD_CHARACTER_BACKGROUNDS_SUCCESS";
export const CREATE_CHARACTER_SUCCESS = "CREATE_CHARACTER_SUCCESS";
export const LOAD_CHARACTER_HOOKS_SUCCESS = "LOAD_CHARACTER_HOOKS_SUCCESS";

// OPTIMISTIC TYPES
// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallsInProgress when the delete request begins.
// export const DELETE_CHARACTER_OPTIMISTIC = "DELETE_CHARACTER_OPTIMISTIC";
