import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  isLoading: false,
  notifications: [] as Notification[],
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
