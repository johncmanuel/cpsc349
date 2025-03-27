// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#link-relpreconnect
"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preconnect("https://raw.githubusercontent.com");
  return null;
}
