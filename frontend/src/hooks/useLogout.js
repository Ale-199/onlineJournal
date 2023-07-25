import { useAuthContext } from "./useAuthContext";
import { useBlogsContext } from "./useBlogsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: disabledBlogs } = useBlogsContext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    disabledBlogs({ type: "SET_BLOGS", payload: null });
  };

  return { logout };
};
