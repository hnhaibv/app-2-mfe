import React from "react";
import { createRoot } from "react-dom/client";
import { RoutingStrategy } from "./routes";
import App from "./App";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const root = createRoot(mountPoint);
  root.render(
    <App initialPathname={initialPathname} routingStrategy={routingStrategy} />
  );
};

export { mount };
