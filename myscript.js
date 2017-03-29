// window.onload = function() {
// 	document.write('Hello world')
// }

// get current tab url
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;
    document.getElementById('url').innerHTML = currentUrl;
    // alert(url);
    var apiUrlToHit = "https://sustcse12.xyz/api/trs/show";
    var linkToBeSent = encodeURIComponent(currentUrl);
    var finalURL = apiUrlToHit+linkToBeSent;
    console.log(finalURL);
    $.ajax({
	    url:  finalURL,
	    dataType: "json",
	    type : "POST",
	    success : function(response) {
	      console.log(response);
	      document.getElementById('score').innerHTML = response.score;
	    },
	    error : function(response) {
	    	console.log(response);
	    }
  	});

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

				$("#submit").click(function(e){
                    e.preventDefault();

                    var $form = $(this);
                    // var $target = $($form.attr('data-target'));
                    var apiUrlToHit = "https://sustcse12.xyz/api/trs/post";
                    var dataToBeSent = $('form#formOfRating').serialize();
                    console.log(dataToBeSent);
                    // $.ajax({
                    //     type: "POST",
                    //     url: apiUrlToHit,
                    //     data: $('form#formOfRating').serialize(),
                    //     dataType: 'json',
                        // function(data) {
                            // console.log(data);
                        // },
                        // success: function(response){
                        //     console.log('ok success');
                        //     console.log(response);
                        //     // if(response.status_code == '201') {
                        //      	// var message = 'Successfull';
                        //         var message = response.message;
                        //         $('#success').html('');
                        //         $('#success').html(message);
                        //     // }
                        // },
                        // error: function(response){
                        //     console.log('Not ok, Failed');
                        //     // var message = 'Something Went Wrong';
                        //     var message = "";
                        //     console.log(response);      
                //         // }
                //     }); // end of ajax
                }); // end of submit button click 




/**
 * Built with the jQuery plugin that was born as a result of the great dribble shot
 * http://rendro.github.io/easy-pie-chart/
 **/
$('.percentage').easyPieChart({
  animate: 1000,
  lineWidth: 4,
  onStep: function(value) {
    this.$el.find('span').text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find('span').text(Math.round(to));
  }
});
