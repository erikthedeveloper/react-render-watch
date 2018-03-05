import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development';

function minify(config) {
  return Object.assign({}, config, {
    output: Object.assign({}, config.output, {
      file: config.output.file.replace('.js', '.min.js'),
    }),
    plugins: config.plugins.concat(uglify()),
  });
}

const baseConfig = {
  input: 'src/index.js',
  external: ['react', 'prop-types'],
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
  ],
};

const umdConfig = Object.assign({}, baseConfig, {
  output: {
    name: pkg.name,
    file: pkg.browser,
    format: 'umd',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },
  plugins: [
    resolve(), // so Rollup can find npm packages
    commonjs(), // so Rollup can convert npm packages to an ES module
    ...baseConfig.plugins,
  ],
});

const cjsConfig = Object.assign({}, baseConfig, {
  output: {file: pkg.main, format: 'cjs'},
});

const esConfig = Object.assign({}, baseConfig, {
  output: {file: pkg.module, format: 'es'},
});

export default (NODE_ENV === 'production'
  ? [minify(umdConfig)]
  : [umdConfig, cjsConfig, esConfig]);
