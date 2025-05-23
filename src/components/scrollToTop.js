import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./scroll.css"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ScrollToTopComponent = () => {
    const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

    const handleBtn = () => {
        window.scrollTo(0, 0) 
    }
    
    useEffect(() => {
    const handleScroll = () => {
      
      const triggerPoint = 300; // Change this to the desired scroll position in pixels
      if (window.scrollY > triggerPoint) {
        setIsVisible(true);
      } else if(window.scrollY < triggerPoint) {
        setIsVisible(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, isVisible])

    return (
        <button onClick={handleBtn} className={`${isVisible ? " show-scroll " : " hide-scroll "} btn btn-lg d-flex flex-column align-items-center justify-content-center scroll-to-top`}>
            <FontAwesomeIcon className="text-warning" icon={faArrowUp} size="2x" />
            <small className="text-warning">Scroll to Top</small>
        </button>
    )
}

export default ScrollToTopComponent