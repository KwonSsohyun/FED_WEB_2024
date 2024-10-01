import { jsxs, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, Fragment } from "react";
function App() {
  useState();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { children: "증가" }),
    /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsx("tbody", { children: Array.from({ length: 10 }).map((v, idx) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" }),
      /* @__PURE__ */ jsx("td", { children: "데이터" })
    ] }, idx)) }) })
  ] });
}
function render() {
  const html = renderToString(
    /* @__PURE__ */ jsx(ChakraProvider, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render as default
};
