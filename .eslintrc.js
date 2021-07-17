module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended", 
        "plugin:require-path-exists/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": ["error", { "args": "none" }]
    }
};
