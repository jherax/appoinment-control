# Medical Appointment Control

This is a Monorepo which consists of 2 projects:

1. **Backend**: Express (see [README.md](https://github.com/jherax/appointment-control/tree/master/backend))
1. **Frontend**: React (see [README.md](https://github.com/jherax/appointment-control/tree/master/frontend))

Each project has its own workspace, and its own environment settings (vscode, typescript, eslint, etc.)

## husky

After cloning the repository
[appointment-control](https://github.com/jherax/appointment-control.git) you must
install the dependencies by running in the terminal:

```bash
npm install
```

Then run the following command to configure git-hooks

```bash
npm run prepare
```

See:
[conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint).

## standard-version

`standard-version` needs to have a starting point to append the CHANGELOG and
other versions to. Simply run:

```bash
npm run release -- --first-release
```

### Usage

For a new release, just run

```bash
npm run release
```

If you want to bump the major version (SEMVER), you can create a commit by
adding the suffix `!` to the commit type, for example:
`git commit -m "feat!: new breaking changes`, or simply run:

```bash
npm run release -- --release-as major
```

For more details, please visit the Github site
[standard-version](https://github.com/conventional-changelog/standard-version)
