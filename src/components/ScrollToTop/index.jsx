import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return children;
};

export default withRouter(ScrollToTop);
