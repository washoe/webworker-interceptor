self.addEventListener('fetch', event => {
  const interceptedRequest = event.request;
  const modifiedRequest = new Request(interceptedRequest, {
    headers: { 'x-custom': 'Custom Header Value from webworker interceptor' } // Add custom header
  });

  console.log('Intercepted Request:', interceptedRequest);

  event.respondWith(
    fetch(modifiedRequest)
      .then(response => {
        console.log('Intercepted Response:', response);
        return response;
      })
  );
});
