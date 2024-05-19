module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@components': './src/components',
          '@custom_hooks': './src/custom_hooks',
          '@navigator': './src/navigator',
          '@types': './src/types',
          '@utils': './src/utils',
          '@helpers': './src/helpers',
          '@': './',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'react-native-reanimated/plugin'],
    },
  },
};
