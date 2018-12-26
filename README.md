# Firebase Auth Generate Token

This is a very simple NodeJs script to generate the Firebase access token from email and password.

## Getting Started

Clone the repository.

```
git clone https://github.com/tregismoreira/firebase-auth-generate-token.git
```

Install the dependencies.

```
# with Yarn
yarn

# or with NPM
npm install
```

Create a `.env` file in the root directory of your project and paste your Firebase credentials.

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
```

Start the script.

```
# with Yarn
yarn start

# or with NPM
npm run start
```

Once you run the script, you will be prompted the email and password. If the credentials are correct, the script will return the access token.

## Authors

-   Thiago Régis ([tregismoreira](https://twitter.com/tregismoreira)) - _Initial work_

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

See [LICENSE](LICENSE)
