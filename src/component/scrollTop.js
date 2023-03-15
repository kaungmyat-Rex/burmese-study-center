import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScroll;
