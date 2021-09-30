import { Route, Switch, Redirect } from "react-router-dom";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/about", exact: true, name: "About" },
  {
    path: "/achievements",
    exact: true,
    name: "Achievements",
  },
  {
    path: "/blog/notebook-app",
    exact: true,
    name: "Post",
  },
  {
    path: "/open-source",
    exact: true,
    name: "OpenSource",
  },
  { path: "/blog", exact: true, name: "Blog" },
  { path: "/tech-stack", exact: true, name: "Tools" },
  { path: "/story-timeline", exact: true, name: "My Story" },
];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          //render={props => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
