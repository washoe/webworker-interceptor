self.addEventListener('fetch', event => {
  const interceptedRequest = event.request;
  const modifiedRequest = new Request(interceptedRequest, {
    headers: { 'x-custom': 'Custom Header Value' } // Add custom header
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
