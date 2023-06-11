# Request Interception POC (based on code by chatGPT)

This Proof of Concept (POC) demonstrates how to intercept HTTP requests made from a web page using a web worker. The intercepted requests are modified by adding a custom header before being sent, and the interception process is logged to the console.

## Getting Started

To run the POC locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/your-username/request-interception-poc.git

2. Open the index.html file in a web browser.

## Usage

The web page contains two buttons that trigger HTTP requests:

- Make XHR Request: Sends an XMLHttpRequest to a specified URL.
- Make Fetch Request: Sends a Fetch request to a specified URL.

The web worker intercepts these requests, adds a custom header ("x-custom"), and logs the intercepted request and response to the console.

## Logging

The web worker logs the intercepted requests and responses to the console. The logged messages can be viewed using the browser's developer tools or console.

## Compatibility

This POC is compatible with modern web browsers that support web workers and the required APIs, such as XMLHttpRequest and fetch.

