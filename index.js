import React from "react";
import { HelloButton } from "./UI";

export default function AppUI() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Sovereign Studio UI Test</h1>
      <HelloButton onClick={() => alert("Hello from UI!")} />
    </div>
  );
}