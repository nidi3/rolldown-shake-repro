# Rolldown tree-shaking regression

Importing only `Combobox*` from `radix-vue` (`"sideEffects": false`) should
let the bundler eliminate `@internationalized/date` and `@internationalized/number`,
since `Combobox*` doesn't reference them.

- Rollup 4: shakes them out (0 references in output).
- Rolldown 1.0.0-rc.17: keeps them in.

## Reproduce

```sh
npm install
npx rollup -c
npx rolldown -c rolldown.config.js

grep -c "@internationalized/date" dist-rollup/bundle.js     # 0
grep -c "@internationalized/date" dist-rolldown/bundle.js   # > 0

wc -c dist-rollup/bundle.js dist-rolldown/bundle.js
```
