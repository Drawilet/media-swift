import { useGlobalState } from "@/state/global";
import { Notification } from "../../types/Notification";

export const useNotifications = () => {
  const [notifications, setNotifications] = useGlobalState("notifications");

  const addNotification = (notification: Notification) => {
    setNotifications([...notifications, notification]);
  };

  const removeNotification = (index: number) => {
    const newNotifications = [...notifications];
    newNotifications.splice(index, 1);
    setNotifications(newNotifications);
  };

  return { notifications, addNotification, removeNotification };
};
