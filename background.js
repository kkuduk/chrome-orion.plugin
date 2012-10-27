require.config({
    baseUrl: "http://orionhub.org/",
    waitSeconds: 15
});

define(['dojo', 'orion/bootstrap','orion/fileClient'],
    function(dojo, mBootstrap, mFileClient) {
        dojo.addOnLoad(function(){
        mBootstrap.startup().then(function(core) {
        var serviceRegistry = core.serviceRegistry;
        window.fileClient = new mFileClient.FileClient(serviceRegistry);
        console.log("loaded");
        });
    });
});

chrome.extension.onRequest.addListener(function(request, sender, callback) {
  console.log("something changed!");
  console.log(request);
  chrome.tabs.query({url: "http://orionhub.org/*"}, function (matchedTabs) {
    if(matchedTabs.lenght !== 0){
        console.log(matchedTabs);
        
        /*chrome.tabs.highlight({tabs: matchedTabs[0].index}, function (window) {
            console.log(window);
        });*/
        chrome.tabs.executeScript(matchedTabs[0].id, {code:"document.body.style.backgroundColor='red'"});
    }
  });
});