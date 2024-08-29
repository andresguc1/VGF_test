# Technical Test Solution

## Overview

This README provides an overview of the solution for the technical test fog VGF management, including the configuration and setup of the project.

## Project Structure

The following testing scripts are configured in the `package.json` file:

### Testing Scripts

The following scripts are used for running Cypress and Playwright tests:

- **test:cypress_ui**: `npx cypress open`  
  Opens Cypress in interactive mode for UI testing.

- **test:cypress_ci**: `npx cypress run`  
  Runs Cypress tests in headless mode for Continuous Integration (CI).

- **test:playwright_ui**: `npx playwright test playwright/ --ui`  
  Runs Playwright tests in interactive mode for UI testing, specifying the `playwright/` directory.

- **test:playwright_ci**: `npx playwright test playwright/`  
  Runs Playwright tests in headless mode for CI, specifying the `playwright/` directory.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
