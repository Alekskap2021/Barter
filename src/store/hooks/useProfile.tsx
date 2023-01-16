import { useSelector } from "react-redux";

export const useProfile = () => {
  const { token, email, phone, isLoggedIn } = useSelector(
    (state: any) => state.user
  );

  return {
    isLoggedIn,
    email,
    phone,
    token,
  };
};

