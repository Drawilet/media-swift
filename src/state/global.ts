import { createGlobalState } from "react-hooks-global-state";
import { Notification } from "../../types/Notification";

const initialState = {
  isLoading: false,
  notifications: [] as Notification[],
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
