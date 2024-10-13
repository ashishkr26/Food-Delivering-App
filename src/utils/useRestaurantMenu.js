//Custom Hooks
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const response = await fetch(MENU_API + resId);
    const jsonData = await response.json();
    setResInfo(jsonData);
  };
  // const fetchInfo = async () => {
  //     try {
  //       const response = await fetch(MENU_API + resId);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const json = await response.json();
  //       setResInfo(json);
  //       console.log(json)
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return resInfo;
};

export default useRestaurantMenu;
