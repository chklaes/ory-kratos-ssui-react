import { PublicApi, Configuration } from "@oryd/kratos-client";
import config from "../config";

export const kratos = new PublicApi(
  new Configuration({ basePath: config.kratos.public })
);
