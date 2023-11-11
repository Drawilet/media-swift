import { useLoading } from "./useLoading";

const useFetcher = () => {
  const { setLoading } = useLoading();

  return async (input: RequestInfo, init?: RequestInit) => {
    setLoading(true);

    const response = await fetch(input, init);
    let data;

    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) data = await response.json();
    else data = await response.blob();

    setLoading(false);
    return [response, data] as const;
  };
};

export default useFetcher;
