import React, { useEffect, useState } from "react";

import { kratos } from "../../Services/Kratos";
import KratosMessages from "../../components/KratosMessages";
import KratosForm from "../../components/KratosForm";

const Error = () => {
  const [requestResponse, setRequestResponse] = useState();

  useEffect(() => {
    const href = window.location.href;
    const flowId = href.split("=")[1];
    console.log("HREF", flowId);
    kratos
      .getSelfServiceError(flowId)
      .then((x) => {
        console.log("RES", x.data);
        setRequestResponse(x.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const form = requestResponse?.methods?.password?.config;
  const messages = requestResponse?.errors;

  return (
    <>
      <h2>Error</h2>
      {messages && messages.map((error) => (
        <div key={error}>
          Code: {error.code} <br/>
          Message: {error.message} <br/>
          Reason: {error.reason} <br/>
          Status: {error.status} <br/>
        </div>
      ))}
    </>
  );
};

export default Error;
