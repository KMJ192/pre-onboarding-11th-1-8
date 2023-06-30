import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/Error/NotFound";
import ErrorBoundary from "../components/ErrorBoundary";
import Error from "../pages/Error/Error";
import LoadingSpinner from "../components/LoadingSpinner/LodingSpinner";
import { Suspense, lazy } from "react";

const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const TodoList = lazy(() => import("../pages/TodoList/TodoList"));
const Index = lazy(() => import("../pages/Index/Index"));
  
function RootRouter() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default RootRouter;
