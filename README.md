# Request Interception POC (based on code by chatGPT)

This Proof of Concept (POC) demonstrates how to intercept HTTP requests made from a web page using a web worker. The intercepted requests are modified by adding a custom header before being sent, and the interception process is logged to the console.

## Why?

Thinking about authentication in a micro frontend architecture, I wanted to keep it separate. ChatGPT says:

Using a web worker to intercept requests has some advantages, depending on your specific use case:

- Offloading work from the main thread: Intercepting requests in the main JavaScript thread can potentially impact the performance and responsiveness of your application, especially if there are multiple requests or if the intercepted requests involve computationally expensive operations. By using a web worker, you can offload the interception logic to a separate thread, leaving the main thread free to handle other tasks and ensuring a smoother user experience.
- Isolation and security: Web workers run in a separate environment with restricted access to the DOM and other APIs. This isolation provides an added layer of security, as the intercepted requests are handled in a controlled and sandboxed environment. It helps prevent potential vulnerabilities and reduces the risk of cross-site scripting (XSS) attacks.
- Concurrency and parallelism: Web workers enable concurrent execution of tasks, as they can handle multiple requests simultaneously. This can improve performance by allowing requests to be intercepted and processed concurrently, leveraging the capabilities of multi-core processors.
- Maintainability and modularity: By encapsulating the request interception logic in a web worker, you can create a more modular and maintainable codebase. The web worker can be developed and tested independently, making it easier to modify or replace the interception logic without affecting the main application logic.

All of which seems reasonable.


## Getting Started

To run the POC locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/your-username/request-interception-poc.git

2. npm install

3. npm start

## Usage

The web page contains two buttons that trigger HTTP requests:

- Make XHR Request: Sends an XMLHttpRequest to a specified URL.
- Make Fetch Request: Sends a Fetch request to a specified URL.

The web worker intercepts these requests, adds a custom header ("x-custom"), and logs the intercepted request and response to the console. There is no output on screen so have your devtools open.

A basic nodejs server verifies that the header has been added.

## Compatibility

This POC is compatible with modern web browsers that support web workers and the required APIs, such as XMLHttpRequest and fetch.

