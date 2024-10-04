import { jsxs, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useState } from "react";
function App() {
  const [length, setLength] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "현재 값: ",
      length
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => setLength(length + 1), children: "증가" }),
    /* @__PURE__ */ jsx("button", { onClick: () => setLength(length - 1), children: "감소" })
  ] });
}
function render() {
  const html = renderToString(
    /* @__PURE__ */ jsx(App, {})
  );
  return { html };
}
export {
  render as default
};
