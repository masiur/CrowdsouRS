// window.onload = function() {
// 	document.write('Hello world')
// }

// get current tab url
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById('url').innerHTML = url;
    // alert(url);

});

 //      chrome.tabs.getSelected(null, function(tab) {
 //    var pageUrl = document.getElementById('url').innerHTML = tab.url;
 //    	console.log(tab.url);
	// });


	/**
 * @api {get} /api/trs/{url} Request Current URL
 * @apiName Get Reputaion Score
 *
 * @apiParam {String} url .
 *
 * @apiSuccess {Float}  score Score of the Requested URL.
 */

