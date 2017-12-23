# Parakore

Parakore (a Māori word meaning 'pure' or 'uncontaminated') is an application that enables people to reduce the amount of waste that they generate.

### Running the project

To run the project for local development, run `npm run database` in one console and `npm start` in another

| Command       | Description   |
| ------------- | ------------- |
| `setup-env`   | Reads `.sample-env`  and generates the `.env` for local dev |
| `database`    | Runs the `db.json` file for local dev |
| `lint`        | Lints the project in accordance with the `.eslint.rc` file* |
| `lint-fix`    | Fixes problems found during linting  |
| `start`       | Runs the `build/dev-server.js` file  |

`* Any issues found during the linting process with result in an `NPM` error being thrown in the console`

