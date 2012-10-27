chrome.extension.onRequest.addListener(function(request, sender, callback) {
  console.log(request);
  console.log("something changed!");

  chrome.tabs.query({url: "http://orionhub.org/*"}, function (matchedTabs) {
	if(matchedTabs.lenght !== 0){
		console.log(matchedTabs);
		
		/*chrome.tabs.highlight({tabs: matchedTabs[0].index}, function (window) {
			console.log(window);
		});*/
	chrome.tabs.executeScript(matchedTabs[0].index, {code:"document.body.style.backgroundColor='red'"});
	}
  });

});