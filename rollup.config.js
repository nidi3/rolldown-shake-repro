import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/entry.js",
  output: { file: "dist-rollup/bundle.js", format: "esm" },
  plugins: [nodeResolve()],
};
