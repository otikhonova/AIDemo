# Newcomer's Guide to Angular Student Management

Welcome to the **Angular Student Management** demo project. This short guide helps you set up the repository, run the application, and explore the code base.

## Overview

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application written in Angular 13. It uses local storage as a fake backend to manage a list of students. You can log in as an administrator, add new students, update or delete existing ones and view individual details.

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (shipped with Node.js)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## Installing dependencies

Install the Node packages required by the project:

```bash
npm install
```

This command downloads all dependencies listed in `package.json`.

## Running the application

To start a development server, run:

```bash
npm start
```

or

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The server reloads automatically when you change any source file.

## Testing

The project uses Karma and Jasmine for unit tests. Execute all tests with:

```bash
npm test
```

## Project structure

Most of the application code lives under the `src/` folder:

- `app/` – Angular modules, components and services
  - `components/` – feature components such as login and student management
  - `services/` – plain services for authentication, configuration and student data
  - `pipes/` – custom Angular pipes used for filtering and formatting
  - `directives/` – example of an attribute directive
- `assets/` – static assets like images
- `extras/css/` – global style sheets (W3CSS and project styles)
- `environments/` – separate configuration files for development and production builds

The root `angular.json` contains build and test configuration. Compilation settings reside in `tsconfig.json`.

## Useful commands

- `ng generate component <name>` – create a new component
- `ng generate service <name>` – create a new service
- `ng build` – build the project for production

## Naming suggestions

Keeping consistent naming conventions makes the code easier to understand. This
project follows a few simple rules inspired by the Angular style guide:

- **Components** – `kebab-case` file names ending in `.component.ts` with matching
  `PascalCase` class names, e.g. `student-list.component.ts` contains
  `StudentListComponent`.
- **Services** – `kebab-case` files suffixed with `.service.ts` and a
  `PascalCase` class such as `StudentService`.
- **Interfaces and models** – `kebab-case` file names like
  `student.model.ts` and `PascalCase` type names.
- **Variables and methods** – use `camelCase`.

Following these suggestions keeps the code base consistent and easier to
navigate.

## Additional resources

The original demo and tutorial are by [Sangwin Gawande](https://sangw.in). You can explore the live demo [here](https://blog.sangw.in/angular-student-management/).

Happy coding!
