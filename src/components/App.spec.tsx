import React from "react";
import { mount } from "cypress-react-unit-test";
import { App } from "./App";

it("should render", () => {
  mount(<App />);
});
