import { useGlobalState } from "@/state/global";
import { Component } from "../../../types/Component";

const Loading: Component = () => {
  const [isLoading] = useGlobalState("isLoading");
  if (isLoading)
    return (
      <div className="w-full h-screen fixed top-0 z-50 bg-opacity-60 bg-black flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  return <></>;
};

export default Loading;
