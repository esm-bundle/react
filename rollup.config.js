import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

const DevReact = require("react/cjs/react.development.js");
const ProdReact = require("react/cjs/react.production.min.js");

export default [
  {
    input: require.resolve("react/cjs/react.development.js"),
    output: {
      format: "esm",
      file: "dist/esm/react.development.js",
      sourcemap: true
    },
    plugins: [
      commonjs({
        namedExports: {
          [require.resolve("react/cjs/react.development.js")]: Object.keys(
            DevReact
          )
        }
      }),
      resolve(),
      replace({
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: require.resolve("react/cjs/react.production.min.js"),
    output: {
      format: "esm",
      file: "dist/esm/react.production.min.js",
      sourcemap: true
    },
    plugins: [
      commonjs({
        namedExports: {
          [require.resolve("react/cjs/react.production.min.js")]: Object.keys(
            ProdReact
          )
        }
      }),
      resolve(),
      replace({
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  }
];
