import React, { useEffect, useState } from "react";

import { kratos } from "../../../Services/Kratos";
import KratosMessages from "../../../components/KratosMessages";
import KratosForm from "../../../components/KratosForm";

const Registration = () => {
  const [requestResponse, setRequestResponse] = useState();

  useEffect(() => {
    const href = window.location.href;
    const flowId = href.split("=")[1];
    console.log("HREF", flowId);
    kratos
      .getSelfServiceRegistrationFlow(flowId)
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
      <h2>Registation</h2>
      {messages && <KratosMessages messages={messages} />}
      {form && (
        <KratosForm
          submitLabel="Sign Up"
          action={form.action}
          fields={form.fields}
          messages={form.messages}
        />
      )}
    </div>
  );
};

export default Registration;
