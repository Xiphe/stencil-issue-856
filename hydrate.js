"use strict";

const { Renderer, loadConfig } = require("@stencil/core/server");

const renderer = new Renderer(loadConfig(__dirname));

renderer
  .hydrate({ html: "<my-button>Hello World</my-button>" })
  .then(({ html }) => {
    console.log("hydrated document:");
    console.log(html);
    console.log("\n...expecting the process to end now");
  });
