import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  isLoading: false,
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
