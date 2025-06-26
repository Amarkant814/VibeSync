import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setActiveTab } from '../../store/ui/uiSlice';
import { ROUTES } from '../routeConfig';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const goTo = (path) => {
    navigate(path);
    // Update the active tab in your existing UI state
    const tabMap = {
      [ROUTES.FEED]: 'feed',
      [ROUTES.MATCHES]: 'matches',
      [ROUTES.COMMUNITIES]: 'communities',
      [ROUTES.CREATE]: 'create',
      [ROUTES.DASHBOARD]: 'feed', // Default to feed for dashboard
    };
    
    if (tabMap[path]) {
      dispatch(setActiveTab(tabMap[path]));
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToAuth = () => {
    navigate(ROUTES.AUTH);
  };

  const goToDashboard = () => {
    navigate(ROUTES.DASHBOARD);
  };

  const isCurrentRoute = (path) => {
    return location.pathname === path;
  };

  const isRouteActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return {
    goTo,
    goBack,
    goToAuth,
    goToDashboard,
    isCurrentRoute,
    isRouteActive,
    currentPath: location.pathname,
  };
};