import React from "react";
import { UserBody } from "./modules/users/app/UserBody";

export function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 300 }}></div>
      <UserBody baseURL={"http://localhost:63253"} />
    </div>
  );
}
