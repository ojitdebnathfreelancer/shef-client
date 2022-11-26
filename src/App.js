import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";


function App() {
  return (
    <div className="max-w-6xl mx-auto lg:px-0">
        <RouterProvider router={router}>

        </RouterProvider>
    </div>
  );
}

export default App;
