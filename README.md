# Rolldown tree-shaking regression

Importing only `Combobox*` from `radix-vue` (`"sideEffects": false`) should
let the bundler eliminate `@internationalized/date` and `@internationalized/number`,
since `Combobox*` doesn't reference them.

- Rollup 4: shakes them out (0 references in output).
- Rolldown 1.0.0-rc.18: keeps them in.
