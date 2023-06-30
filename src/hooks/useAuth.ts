import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

type DecodeToken = {
  email: string;
  exp: number;
  iat: number;
  sub: number;
};

function useAuth() {
  const navigate = useNavigate();

  const authChecker = () => {
    const token = window.localStorage.getItem("token");
    if (typeof token === "string") {
      const decoded: DecodeToken = jwt_decode(token);

      const expDate = new Date(decoded.exp * 1000);
      const presDate = new Date();
      if (expDate.getTime() <= presDate.getTime()) {
        // 토큰 만료
        window.localStorage.removeItem("token");
        navigate("/signin");
      }
    }
  };

  return { authChecker };
}

export default useAuth;
