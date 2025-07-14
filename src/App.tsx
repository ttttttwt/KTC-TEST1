import { createBrowserRouter, RouterProvider } from "react-router";
import { UserProvider } from "./contexts/UserProvider";
import HomePage from "./pages/HomePage";
import UserDetail from "./pages/UserDetailPage";
import UserListPage from "./pages/UserListPage";
import Header from "./pages/header";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UserListPage />,
      },
      {
        path: "/users/:id",
        element: <UserDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
