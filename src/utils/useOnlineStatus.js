import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
      console.log(online)
    });

    window.addEventListener("online", () => {
      setOnline(true);
    });
    
  }, []);
  return online;
};
export default useOnlineStatus;
