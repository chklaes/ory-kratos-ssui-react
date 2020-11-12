import React, { useEffect, useState } from "react";

import { kratos } from "../../../Services/Kratos";
import KratosMessages from "../../../components/KratosMessages";
import KratosForm from "../../../components/KratosForm";

const Login = () => {
  const [requestResponse, setRequestResponse] = useState();

  useEffect(() => {
    const href = window.location.href;
    const flowId = href.split("=")[1];
    console.log("HREF", flowId);
    kratos
      .getSelfServiceLoginFlow(flowId)
      .then((x) => {
        console.log("RES", x.data);
        setRequestResponse(x.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const form = requestResponse?.methods?.password?.config;
  const messages = requestResponse?.messages;

  return (
    <div>
      <h2>Login</h2>
      {messages && <KratosMessages messages={messages} />}
      {form && (
        <KratosForm
          submitLabel="Sign In"
          action={form.action}
          fields={form.fields}
          messages={form.messages}
        />
      )}
    </div>
  );
};

export default Login;
