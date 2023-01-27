import { router } from "./routes/AppRoutes";
import { RouterProvider } from "react-router-dom";
import { LoadingFallback } from "./components/LoadingFallback";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<LoadingFallback />} />
    </div>
  );
}

export default App;
