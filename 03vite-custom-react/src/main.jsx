import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function Hello() {
  return <h1>Welcome</h1>;
}

// let ReactElement = {
//     type : "a",
//     props : {
//         href : "https://www.google.com",
//         target : "_main"
//     },
//     children : "Click Me to Visit Google"
// }

// let Element = (<p>This is paragraph</p>);

// let Element = React.createElement(
//   'p',
//   {
//     style: "color : red",
//   },
//   'This is paragraph'
// );

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
