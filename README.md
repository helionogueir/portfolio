# [Helio Nogueira](https://www.linkedin.com/in/helionogueir/)'s Portfolio

That is my personal portfolio project. Here I'm bringing all of what I'm studying about **Software Architecture, Algorithms, design Patterns**, and everything that I love to do as a Software Engineer.

Come with me, and let's learn more about software development, and feel free to open a PR if you want to help me with something.

## About the Source (`src`) Package

My approach here (_Application Architecture_) was using the _[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)_ as the base of the application, where:

- _[application](src/application/README.md)_ package represents the **Application Business Rules**;
- _[components](src/components/README.md)_ and _[pages](src/pages/README.md)_ packages represent the **Interface Adapters**;
- _[domain](src/domain/README.md)_ package represents the **Enterprise Business Rules**;
- _[configs.json](src/configs.json)_ has the basic parameters to run the application. Just see the file; no doubt you will understand.

## About the Other Packages

- _[.eslint.config](.eslint.config)_ extra configuration to _[eslint](https://eslint.org)_;
- _[.storybook](.storybook)_ configuration to [storybook](https://storybook.js.org);
- _[.vitest](.vitest)_ configuration to [vitest](https://vitest.dev).
- _[.vscode](.vscode)_ workspace configuration to [vscode](https://code.visualstudio.com/docs/editor/workspaces#_singlefolder-workspace-settings).

## How to use this Application

You will need [docker](https://docs.docker.com/engine/install) and [docker-compose](https://docs.docker.com/compose/install) to use the commands below. It's necessary to access the repository root path.

### lint

Lint is the computer science term for a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs.

```bash
$ docker-compose run lint
```

### lint

[Lint](<https://en.wikipedia.org/wiki/Lint_(software)>) is the computer science term for a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs.

```bash
$ docker-compose run lint
```

### Format

[Formart](https://en.wikipedia.org/wiki/Coding_conventions) (Coding Conventions) are a set of guidelines for a specific programming language that recommend programming style, practices, and methods for each aspect of a program written in that language..

```bash
$ docker-compose run format
```

### tests

[Unit testing](https://en.wikipedia.org/wiki/Unit_testing), a.k.a. component or module testing, is a form of software testing by which isolated source code is tested to validate expected behavior

```bash
$ docker-compose run tests
```

[Code coverage](https://en.wikipedia.org/wiki/Code_coverage), also called test coverage, is a percentage measure of the degree to which the source code of a program is executed when a particular test suite is run.

```bash
$ docker-compose run tests-coverage
```

### build

[Build](https://en.wikipedia.org/wiki/Software_build) is the process of converting source code files into standalone software artifact(s) that can be run on a computer, or the result of doing so.

```bash
$ docker-compose run build
```
