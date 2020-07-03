(module.exports = {
  "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
  "extends": [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "prettier/@typescript-eslint" // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "parserOptions": {
    "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module", // Allows for the use of imports
    "ecmaFeatures": {
      "jsx": true // Allows for the parsing of JSX
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  "ignorePatterns": ["*.js"] // temporarily ignore js files
})
