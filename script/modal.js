// alert("a");

    // window.onload = function() {
    //    document.getElementById('url').innerHTML = currentUrl;
    // 	alert(currentUrl);
    // }


chrome.tabs.executeScript( null, {code:"var x = 10; x"},
   function(results){ 
   	console.log(results); 
   	alert(results);
   } );


