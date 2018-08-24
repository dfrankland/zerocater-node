import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  external: ['node-fetch', 'moment'],
  plugins: [
    babel({
      presets: [
        [
          'env',
          {
            modules: false,
            targets: {
              node: 6,
            },
          },
        ],
        'stage-0',
      ],
      babelrc: false,
    }),
  ],
};
