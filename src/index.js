import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const reactroot = createRoot(container);
reactroot.render(<App tab="home" />);
