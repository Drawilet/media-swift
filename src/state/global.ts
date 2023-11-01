import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  isLoading: false,
  notifications: [] as { type: string; message: string; icon: string }[],
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
