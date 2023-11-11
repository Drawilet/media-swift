import { useGlobalState } from "@/state/global";

export const useLoading = () => {
  const setLoading = useGlobalState("isLoading")[1];

  return {
    setLoading,
  };
};
