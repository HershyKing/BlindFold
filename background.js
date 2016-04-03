chrome.webNavigation.onCompleted.addListener(function(details) {
	chrome.tabs.executeScript({file: "blindfold.js"})
	console.log("IM IN background.JS!");
});