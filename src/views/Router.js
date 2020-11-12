import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import Login from "./auth/login";
import Registration from "./auth/registration";
import Home from "./home";
import Error from "./error";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
