import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router"; // Correct import
import { createRoutesFromElements } from "react-router"; // Correct import
import NotFound from "./Pages/NotFound";
import Rootlayout from "./Layout/Rootlayout";
import Protect from "./Components/ProtectedRoute";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Blog = lazy(() => import("./Pages/Blog"));
const Menu = lazy(() => import("./Pages/Menu"));
const Navbar = lazy(() => import("./Components/Navbar"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Menudetail = lazy(() => import("./Pages/Menudetail"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Protect />}>
          <Route path="/" element={<Rootlayout />}>
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="blog"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Blog />
                </Suspense>
              }
            />

            <Route path="menu">
              <Route
                index
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Menu />
                  </Suspense>
                }
              />
              <Route
                path=":id"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Menudetail />
                  </Suspense>
                }
              />
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

        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
