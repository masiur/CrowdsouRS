// function blockRequest(details) {
//    return {cancel: true};
// }

// function updateFilters(urls, test) {
//    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
//      chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
//    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.facebook.com/*", "*://*.facebook.net/*"]}, ['blocking']);
// }




chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
  	  if( tab.url  != 'chrome://newtab/'){
  	 

  	    var apiUrlToHit = "https://sustcse12.xyz/api/trs/show";
		var linkToBeSent = encodeURIComponent(tab.url);
		var finalURL = apiUrlToHit+'?link='+linkToBeSent;
		$.ajax({

		    type : "POST",
		    url:  apiUrlToHit,
		    data: { link: linkToBeSent },
		    dataType: "json", 
		    success : function(response) {

               
		    	if(response.score < 2){
                     
					
					if (confirm("This URL is Very Untrustworthy. Back to Main Page?") == true) {
				       
				        chrome.tabs.getSelected(null, function(tab) {
						   chrome.tabs.remove(tab.id);
						 });

				          evt.preventDefault();

				    } else {
				        
				    }




                  
		    	}
		         
		    },
		    error : function(response) {
		        console.log(response);
		        console.log(response.responseText);
		    }
		});



  	  }
  }
})





	








//full page load
// _ini();
// function _ini(){
//     document.getElementsByTagName("html")[0].style.display="none";
//     window.onload=function(){
//         document.getElementsByTagName("html")[0].style.display="block"; //to show it all back again
//     }
// }



// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   // how to fetch tab url using activeInfo.tabid
//   chrome.tabs.get(activeInfo.tabId, function(tab){
//      console.log(tab.url);
//      alert(tab.url);
//   });
// }); 





