import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
import css from "rollup-plugin-import-css"

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                assetFileNames: '[name][extname]'
            },
            // {
            //     file: packageJson.module,
            //     format: "esm",
            //     sourcemap: true,
            //     assetFileNames: '[name][extname]'
            // },
        ],
        plugins: [
            resolve(),
            commonjs(),
            css(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
    },
    // {
    //     input: "dist/esm/index.d.ts",
    //     output: [{ file: "dist/index.d.ts", format: "esm"}],
    //     plugins: [dts(), scss()],
    // },
];