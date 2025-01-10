import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

//components
import ProtectedRouters from "./components/ProtectedRouters";

// page
import Craete from "./pages/Craete";
import Progects from "./pages/Progects";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Aboute from "./pages/Aboute";
import Register from "./pages/Register";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";

// actions
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { action as CreateAction } from "./pages/Craete";

// function
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login, authReadyAct } from "./app/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { user, authReady } = useSelector((store) => store.user);

  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <PageNotFound />,
      element: (
        <ProtectedRouters user={user}>
          <MainLayouts />
        </ProtectedRouters>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <PageNotFound />,
        },
        {
          path: "/craete",
          element: <Craete />,
          action: CreateAction,
          errorElement: <PageNotFound />,
        },
        {
          path: "/progects/:id",
          element: <Progects />,
          errorElement: <PageNotFound />,
        },
        {
          path: "/users/id",
          element: <Users />,
          errorElement: <PageNotFound />,
        },
        {
          path: "/aboute",
          element: <Aboute />,
          errorElement: <PageNotFound />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReadyAct());
    });
  });
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
