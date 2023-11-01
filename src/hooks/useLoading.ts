import { useGlobalState } from "@/state/global";

export const useLoading = () => {
  const [isLoading, setLoading] = useGlobalState("isLoading");

  return {
    setLoading,
  };
};
