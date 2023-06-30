import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import TodoList from "../pages/TodoList/TodoList";
import Index from "../pages/Index/Index";
import NotFound from "../pages/Error/NotFound";
import useAuth from "../hooks/useAuth";

function RootRouter() {
  const { authChecker } = useAuth();

  useEffect(() => {
    authChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RootRouter;
