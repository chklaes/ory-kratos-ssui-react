import React from "react";
import { kratos } from "../../Services/Kratos";
import config from '../../config'

const Home = () => {
  const onClickWhoAmI = () =>
    kratos
      .whoami()
      .then((res) => console.log("WHO_AM_I", res))
      .catch((err) => {
        console.error("ERROR", err);
      });

  return (
    <>
      <h4>Home</h4>
      <a href={`${config.kratos.public}/self-service/login/browser`}>Login</a>{" "}
      <a href={`${config.kratos.public}/self-service/registration/browser`}>
        Register
      </a>{" "}
      <a href={`${config.kratos.public}/sessions/whoami`}>WhoAmI</a>{" "}
      <button onClick={onClickWhoAmI}>WhoAmI</button>{" "}
      <a href={`${config.kratos.public}/self-service/browser/flows/logout`}>
        Logout
      </a>{" "}
    </>
  );
};

export default Home;
