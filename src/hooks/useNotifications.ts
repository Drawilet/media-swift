import { useGlobalState } from "@/state/global";

export const useNotifications = () => {
  const [notifications, setNotifications] = useGlobalState("notifications");

  const addNotification = (type: string, message: string, icon: string) => {
    setNotifications([...notifications, { type, message, icon }]);
  };

  const removeNotification = (index: number) => {
    const newNotifications = [...notifications];
    newNotifications.splice(index, 1);
    setNotifications(newNotifications);
  };

  return { notifications, addNotification, removeNotification };
};
