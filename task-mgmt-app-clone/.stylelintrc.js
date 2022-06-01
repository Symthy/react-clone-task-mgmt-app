module.exports = {
    "plugins": ["stylelint-scss"],
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-prettier"
    ],
    "string-quotes": "single",
    "ignoreFiles": ["/dist/*", "**/node_modules/**"],
    "rules": {
        "selector-class-pattern": null,
        "indentation": 2,
    },
}