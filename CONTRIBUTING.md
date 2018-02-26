# Contributing

Thanks for being willing to contribute! There are many different ways to contribute to this project from bug fixes, to documentation improvements, all the way to new features. This guide aims to help you succeed in contributing to the project.

## Opening issues

Open an issue to report bugs or to propose new features.

## Proposing pull requests

Pull requests are very welcome. If you are proposing significant changes, be sure to open an issue for discussion first. This will ensure that your PR may be accepted before you invest your time and energy into it.

**Working on your first Pull Request?**

Here are some free resources to help you get started:

* http://makeapullrequest.com/
* http://www.firsttimersonly.com/
* https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github

## Project setup

_\*While [yarn](http://yarnpkg.com/) is preferred, `yarn` is interchangeable with `npm` throughout._

1. Create a fork of the repo

In the top-right corner of the page https://github.com/erikthedeveloper/react-render-watch, click **Fork**.

2. Create a local clone of your fork

```
git clone https://github.com/YOURUSERNAME/react-render-watch
cd react-render-watch
```

3. Install dependencies and run tests to validate your clone of the project

```
yarn install
yarn test
```

Related reading: [GitHub's Fork a Repo Guide](https://help.github.com/articles/fork-a-repo/)

## Committing and Pushing changes

The overall process is as follows:

1. Fork the repo and create a local clone
2. Introduce changes in a feature branch based off of `master`
3. Commit and push changes to your forked repo
4. Submit [a pull request](https://help.github.com/articles/about-pull-requests/) to `master` on the main project's repo

### Commiting

Please separate and commit changes in a logical fashion along with appropriate commit messages/summaries. Here are some resources for tips on writing quality commit messages:

* https://github.com/erlang/otp/wiki/writing-good-commit-messages
* https://github.com/trein/dev-best-practices/wiki/Git-Commit-Best-Practices

### Tests

Be sure to run the tests before you commit your changes. https://guides.github.com/introduction/flow/

Please add, update, and/or remove tests appropriately along with your changes. If you need help with this, please reach out and ask.

* To run tests once: `yarn test`
* To run tests continually: `yarn test:watch`

### Code style

This project uses prettier to automate away all code style and formatting concerns (https://prettier.io/). Rules are defined in `.prettierrc`. All code, including tests, should be formatted before committing. It is highly recommended to set this up to be automated via your code editor of choice. See guides here: https://prettier.io/docs/en/editors.html.

### Documentation

Please be sure to update documentation such as `README.md` to reflect your changes.

## Help needed

Please checkout the [the open issues](https://github.com/erikthedeveloper/react-render-watch/issues).

Also, please watch the repo and respond to questions, bug reports, and/or feature
requests! Thanks!
