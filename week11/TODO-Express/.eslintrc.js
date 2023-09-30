module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "semi":[
            "error",
            // "never"     // means show error when semicolon is given
            "always"     // means show error when semicolon is not given
        ],
        "indent":["error", 4]       // means show error if indentation is not either 0 or 4 spaces
        // "indent":["error", "tab", { "ignoreComments": true }]       // this tab thing depends on editor to  editor so shows problem
        
    }
}
