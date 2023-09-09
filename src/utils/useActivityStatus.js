import { useEffect, useState } from "react";

export const useActivityStatus = () => {
  const [activitySatus, setActivityStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setActivityStatus(false);
    });

    window.addEventListener("online", () => {
      setActivityStatus(true);
    });
  }, []);

  return activitySatus;
};
