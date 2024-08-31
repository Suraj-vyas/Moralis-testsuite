# Moralis UI/API Automation Framework by Suraj

## Overview

This repository contains an UI/API test cases of :
1. eth_blockNumber RPC method
2. eth_getBlockByNumber RPC method
3. eth_getTransactionByHash RPC method
3. getWalletNFTs Web3 Data API
4. Nodes setup Via a Dashboard UI
5. Login to Dashboard UI

## Features

- **Flexible Request Handling:** Interact with APIs using HTTP requests (GET and POST) and handle responses effectively for both Positive and Negative testing scenarion
- **Data-Driven Testing:** Perform data-driven testing
- **Assertions and Validations:** Validate API responses using built-in assertions.
- **Environment Management:** Manage multiple environments (e.g., Develop, UAT, API(Production)) seamlessly.
- **Comprehensive Reporting:** Generate detailed reports to track test execution results and identify issues.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- [Playwright](https://playwright.dev/)
- .ENV file

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Suraj-vyas/Moralis-testsuite.git
    ```

2. Navigate to the project directory which you want to run, for example :

    ```bash
    cd Moralis-testsuite
    ```

3. Install dependencies:

    ```bash
    npm init playwright@latest
    ```
    and 
     ```bash
    npm i
    ```
3. Create ENV File :

    create a .ENV file with following key and filed the data respectively
    ```bash
    ETH_Node_ID=""
    MORALIS_API_KEY=""
    MORALIS_UN=""
    MORALIS_PW=""
    ```

### Running Tests

* To run tests of particular testing file, execute the following command:

```bash
npx playwright test Testing_Suite/API/RPC/getBlockByNumber.spec.ts
```

* To run tests for all positive Scenario , execute the following command:

```bash
npx playwright test -g "@Positive"
```

* To run tests in UI Mode, execute the following command:

```bash
npx playwright test --ui
```
* To run tests for UI , first user have to remove skip annotation from Testing_Suite/UI/StorageSession/storageSession.spec.ts test case and run the following command and filled the details Manually:
```bash
npx playwright test Testing_Suite/UI/StorageSession/storageSession.spec.ts --headed
```


### Changing of test execution Environment

> To run tests in specific environment, go to playwright.config.js and change the baseURL value.
