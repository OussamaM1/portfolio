import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Achievements from "./Achievements";
import Home from "./Home";
import Repos from "./Repos";
import TechStack from "./TechStack";

interface Links {
  path: string;
  exact: boolean;
  name: string;
  component: any;
}

const routes: Links[] = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  {
    path: "/achievements",
    exact: true,
    name: "Achievements",
    component: Achievements,
  },
  { path: "/tech-stack", exact: true, name: "Tools", component: TechStack },
  { path: "/projects", exact: true, name: "Projects", component: Repos },
];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={(props) => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
