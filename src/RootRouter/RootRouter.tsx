import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/Error/NotFound";
import ErrorBoundary from "../components/ErrorBoundary";
import Error from "../pages/Error/Error";
import LoadingSpinner from "../components/LoadingSpinner/LodingSpinner";
import { Suspense, lazy, useEffect } from "react";
import useAuth from "../hooks/useAuth";

const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const TodoList = lazy(() => import("../pages/TodoList/TodoList"));
const Index = lazy(() => import("../pages/Index/Index"));

function RootRouter() {
  const { authChecker } = useAuth();

  useEffect(() => {
    authChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default RootRouter;
