import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

const DevReact = require("react/cjs/react.development.js");
const ProdReact = require("react/cjs/react.production.min.js");

function createDevConfig(format) {
  const dir = format === "module" ? "esm" : format;

  return {
    input: `src/development.js`,
    output: {
      format,
      file: `${dir}/react.development.js`,
      sourcemap: true,
      banner: `/* react@${DevReact.version} development version */`,
      exports: "named",
    },
    plugins: [
      commonjs(),
      resolve(),
      replace({
        values: {
          "process.env.NODE_ENV": '"development"',
        },
      }),
    ],
  };
}

function createProdConfig(format) {
  return {
    input: `src/production.js`,
    output: {
      format,
      file: `${format}/react.production.min.js`,
      sourcemap: true,
      banner: `/* react@${ProdReact.version} production version */`,
      exports: "named",
    },
    plugins: [
      commonjs(),
      resolve(),
      replace({
        values: {
          "process.env.NODE_ENV": '"production"',
        },
      }),
      terser({
        output: {
          comments(node, comment) {
            return comment.value.trim().startsWith("react@");
          },
        },
      }),
    ],
  };
}

export default [
  createDevConfig("esm"),
  createDevConfig("system"),
  createProdConfig("esm"),
  createProdConfig("system"),
];
