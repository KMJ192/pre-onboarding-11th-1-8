import { BrowserRouter } from "react-router-dom";

import RootRouter from "./RootRouter/RootRouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./pages/Error/Error";

function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
