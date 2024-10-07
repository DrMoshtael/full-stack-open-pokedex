Let's say a team of 6 are building a Python application. 

Some common steps in a CI setup: Each developer is working on their own branch and submits a pull request when they are ready. In order for it to be accepted, it must pass all the tests including lint. There is no build step as it is an interpreted language, just packaging. The main branch is kept deployable at all times. Once an update is made, it is automatically deployed. 

Common tools: For linting, Pylint and Flake8. For testing, unittest, pytest and nose. For packaging, setuptools and pipenv. 

Some alternatives to Jenkins and GitHub Actions for setting up CI: Travis CI; CircleCI; GitLab CI/CD; Bitbucket Pipelines; Azure Pipelines; TeamCity; Bamboo. 

Given the small team size, this setup would probably be better in a cloud-based environment. It would allow easier configuation and avoids the hassle and expense of setting up your own system so is probably cheaper. 