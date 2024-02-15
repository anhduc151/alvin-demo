import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { RoutesApp } from "./router";
import DefaultLayout from "./layout/DefaultLayout";
import DarkMode from "./components/DarkMode";
import "./App.css";

function App() {
  const [token, setToken] = useState(false);

  // default dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <Router>
      <div>
        <DarkMode />
        <Routes>
          {/* {token ? (
            <Route path={"/dashboard"} element={<DashBoard token={token} />} />
            ) : (
              ""
            )} */}

          {RoutesApp.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* handle 404 pages */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
