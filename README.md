# Eleventy Project

This project is built with Eleventy. Installed with Node v18.13.0.

## Setup

1. Run `npm install` or any other preferred package manager (e.g. `yarn`, `pnpm install`) to install the project dependencies.
2. Run `npm start` to serve the project up on `http://localhost:8080`.

## Build

Once ready for handover, stop the serve command and run `npm run build`, then handover the contents of the `dist` folder.

## Stylelint

The project has been setup with some opinionated Stylelint config. Currently tested in VS Code with the stylelint extension --- requires opening the project folder as a Workspace.

## Editorconfig

The project has been setup with an opinionated Editorconfig. Currently tested in VS Code with the editroconfig extension --- _most likely_ requires opening the project folder as a Workspace.

## Rollup

The project has been setup with Rollup.js, so that we may separate our JS files into partials during development, but serve them up as a single `main.js` file.

Should you require any third-party libraries and plugins, download their minified JS files and place them into the `assets/js/` folder, then add in the `<script>` tag into the `_layouts/base.njk` file. Make sure it is placed above the `main.js`. Do not load the library as a partial into the `main.js`.

## Root Path

All pages have a `rootPath` data that gives us access to the root folder relative path.

Let's say we need to display an image that is located in `assets/images/sample.png`; instead of using `{{ '/assets/images/sample.png' | url }}` as recommended in the Eleventy docs, we should do `{{ rootPath }}assets/images/sample.png` instead.
