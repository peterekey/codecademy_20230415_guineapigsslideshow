import React from "react";
import { createRoot } from "react-dom/client";
import GuineaPigs from "./components/GuineaPigs"

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<GuineaPigs />);