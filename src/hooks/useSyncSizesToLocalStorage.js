import { useEffect } from "react";
import { useSelector } from "react-redux";

const useSyncSizesToLocalStorage = () => {
  const sizes = useSelector((state) => state.sizes);

  useEffect(() => {
    // sizes state değiştiğinde localStorage'ı güncelle
    localStorage.setItem("sizes", JSON.stringify(sizes));
  }, [sizes]);
};

export default useSyncSizesToLocalStorage;
