chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(function(event, content) {
  chrome.extension.sendRequest({event: event, content: content}, function(response) {
    // Handle response
  });
});