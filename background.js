// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//     alert(url);
// });

// var tabUrl;
// chrome.browserAction.onClicked.addListener(function(activeTab) {
//     var x=activeTab.url;
//     var newURL = "https://www.google.com";
//     // if (x!= newURL) {
//     //     //to open a page in a new tab
//     //     chrome.tabs.create({url: newURL,"selected":true});
//     //     //to open the page with the current tab
//     //     chrome.tabs.update(activeTab.id, {url:newURL});
//     // }
//     alert(x);

// });

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   // alert(tab.url);
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="white"'
//   });
// });