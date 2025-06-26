import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

// Feature-specific hooks
export const useAuth = () => {
  return useAppSelector((state) => state.auth);
};

export const usePosts = () => {
  return useAppSelector((state) => state.posts);
};

export const useMatches = () => {
  return useAppSelector((state) => state.matches);
};

export const useUI = () => {
  return useAppSelector((state) => state.ui);
};