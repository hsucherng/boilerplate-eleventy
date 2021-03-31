# Eleventy Project

This project is built with Eleventy.

## Setup

1. Run `npm install` or `yarn` to install the project dependencies.
2. Run `npm run serve` to serve the project up on `http://localhost:8080`.

## Root Path

All pages have a `rootPath` data that gives us access to the root folder relative path.

Let's say we need to display an image that is located in `assets/images/sample.png`; instead of using `{{ '/assets/images/sample.png' | url }}`, we can now do `{{ rootPath }}assets/images/sample.png` instead.
