import React from "react";
import { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router";
import { createRoutesFromElements } from "react-router";
import NotFound from "./pages/NotFound";
import Rootlayout from "./layout/Rootlayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import MenuItemDetail from "./pages/MenuItemDetail";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Menu = lazy(() => import("./pages/Menu"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setIsLoggedIn(true);
    }
    
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Rootlayout />}>
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="menu">
              <Route index element={<Menu />} />

              <Route path=":id" element={<MenuItemDetail />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
