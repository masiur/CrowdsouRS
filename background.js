chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
  	  if( tab.url  != 'chrome://newtab/'){
  	   //alert(tab.url);
       console.log("aa111111aa");


  	    var apiUrlToHit = "http://localhost:8000/api/trs/show";
		var linkToBeSent = encodeURIComponent(tab.url);
		var finalURL = apiUrlToHit+'?link='+linkToBeSent;
	

		$.ajax({

		    type : "POST",
		    url:  apiUrlToHit,
		    data: { link: linkToBeSent },
		    dataType: "json", 
		    success : function(response) {


		    	if(response.score < 2){
		    		alert("This link is Very Untrustworthy.");
                    evt.preventDefault();
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






// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   // how to fetch tab url using activeInfo.tabid
//   chrome.tabs.get(activeInfo.tabId, function(tab){
//      console.log(tab.url);
//      alert(tab.url);
//   });
// }); 





