import json from "rollup-plugin-json";

export default {
  input: 'src/index.js',
  output: [
    {
        file: './dist/vxetable-plugin.js',
        format: 'iife',
        name: 'vxeTablePlugin'
    },
    {
      file: './dist/vxetable-plugin.min.js',
      format: 'iife',
      name: 'vxeTablePlugin'
    },
  ],
  plugins: [
    json()
  ]
};