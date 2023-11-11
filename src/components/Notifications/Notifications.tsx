import classNames from "classnames";
import { Component } from "../../../types/Component";
import { useGlobalState } from "@/state/global";
import { useEffect } from "react";

const Notifications: Component = () => {
  const [notifications, setNotifications] = useGlobalState("notifications");

  useEffect(() => {
    if (notifications.length > 0)
      setTimeout(() => {
        setNotifications((notifications) => notifications.slice(1));
      }, 5000);

    return () => {};
  }, []);

  return (
    <div className="toast toast-end z-40">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={classNames(`flex alert`, {
            "alert-error": notification.type === "error",
            "alert-success": notification.type === "success",
            "alert-warning": notification.type === "warning",
          })}
        >
          <i className={`${notification.icon}`}></i>
          <span>{notification.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
