
export interface State {
    cv: any | undefined
    status: "idle" | "loading" | "success" | "error";
    error: string | null
}

type cvActions =
    | {type: "FETCH_START"}
    | {type: "FETCH_SUCCESS", payload: any}
    | {type: "FETCH_ERROR", error: string}
    | {type: "CLEAN", payload: State}

export const initialCVState: State = {
  cv: undefined,
  status: 'idle',
  error: null
};

export function reducer(state: State, action: cvActions): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, status: "loading", error: null };
    case "FETCH_SUCCESS":
      return { cv: action.payload, status: "success", error: null };
    case "FETCH_ERROR":
      return { cv: undefined, status: "error", error: action.error };
    case "CLEAN":
      return initialCVState;
    default:
      return state;
  }
}