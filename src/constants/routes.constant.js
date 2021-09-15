import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const routes = {
  login: () => ({
    route: "/",
    component: Login,
  }),
  register: () => ({
    route: "/signup",
    component: Register,
  }),
  main: () => ({
    route: "/home",
    component: Main,
  }),
};

export default routes;
