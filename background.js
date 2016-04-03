chrome.webNavigation.onCompleted.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "searchTunes.js"
});