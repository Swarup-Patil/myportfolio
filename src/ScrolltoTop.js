import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto", 
      });
    }, 600); 

    return () => clearTimeout(timer); // cleanup
  }, [pathname]);

  return null;
};

export default ScrollToTop;
