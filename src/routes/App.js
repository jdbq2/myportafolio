import React, { useState, useEffect } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Bio from "../pages/Bio/Bio";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
  {
    name: "home",
    path: "/",
    Component: Home,
  },
  {
    name: "bio",
    path: "/bio",
    Component: Bio,
  },
  {
    name: "projects",
    path: "/projects",
    Component: Projects,
  },
];

const App = () => {
  const [theme, setTheme] = useState("ligthMode");

  const themeChangeHandle = () => {
    if (theme == "ligthMode") {
      document.body.classList.remove("ligthMode");
      setTheme("darkMode");
      document.body.classList.add("darkMode");
      localStorage.setItem("theme", "darkMode");
    } else if (theme == "darkMode") {
      document.body.classList.remove("darkMode");
      setTheme("ligthMode");
      document.body.classList.add("ligthMode");
      localStorage.setItem("theme", "ligthMode");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", theme);
      document.body.classList.add(theme);
    } else {
      setTheme(localStorage.getItem("theme"));
      document.body.classList.add(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <HashRouter basename="/">
      <Layout theme={themeChangeHandle} themeState={theme}>
        <Switch>
          {routes.map(({ name, path, Component }) => (
            <Route key={name} exact path={path}>
              <Component />
            </Route>
          ))}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
