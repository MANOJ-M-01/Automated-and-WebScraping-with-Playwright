## Description

This repository contains a collection of scripts and tools for web scraping, screenshotting, and automated testing using Playwright.

### Installation

```sh
npm init playwright@latest
```

```sh
√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · true
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration
```

## Run a test

```sh
npx playwright test
```

View Test report

```sh
npx playwright show-report
```

https://playwright.dev/docs/screenshots

## Run scripts

### For Screenshots

```sh
npm run snap
```

### For Scraping

```sh
npm run scrape
```

### Full page screenshot not fully renderd

playwright screenshot page not loaded  
https://github.com/microsoft/playwright/issues/620

# Screenshots

| **Count** | **Device** | **Animation** | **Scrolling** | **Screenshot**                                                                                     |
| --------- | ---------- | ------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| 1         | Mobile     | Enabled       | Disabled      | <img src="./sample/snap-phone-1721901846171.png" alt="Mobile Animation No Scroll" height="200">    |
| 2         | Web        | Enabled       | Disabled      | <img src="./sample/snap-web-1721901846913.png" alt="Web Animation No Scroll" height="200">         |
| 3         | Mobile     | Disabled      | Disabled      | <img src="./sample/snap-phone-1721901894589.png" alt="Mobile No Animation No Scroll" height="200"> |
| 4         | Web        | Disabled      | Disabled      | <img src="./sample/snap-web-1721901895389.png" alt="Web No Animation No Scroll" height="200">      |
| 5         | Mobile     | Enabled       | Enabled       | <img src="./sample/snap-phone-1721901983319.png" alt="Mobile Animation With Scroll" height="200">  |
| 6         | Web        | Enabled       | Enabled       | <img src="./sample/snap-web-1721901984227.png" alt="Web Animation With Scroll" height="200">       |
