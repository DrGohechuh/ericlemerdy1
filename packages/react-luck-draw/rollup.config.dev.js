import { name } from './package.json'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/index.js',
  output: [
    // {
    //   file: `./dist/${name}.cjs.js`,
    //   format: 'cjs',
    //   sourcemap: true
    // },
    {
      file: `./dist/${name}.umd.js`,
      format: 'umd',
      name: 'LuckyCanvas',
      sourcemap: true,
    },
    // {
    //   file: `./dist/${name}.es.js`,
    //   format: 'es',
    //   sourcemap: true,
    // },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    json(),
    livereload(),
    serve({
      open: true,
      port: 8000,
      contentBase: './',
      openPage: '/example/index.html',
    }),
  ],
  external: ['react'],
}
