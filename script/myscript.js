// window.onload = function() {
//  document.write('Hello world')
// }





// get current tab url
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;
    //  chrome.tabs.getSelected(null, function(tab) {
    // var currentUrl = document.getElementById('url').innerHTML = tab.url;
     // console.log(tab.url);
    // });
    document.getElementById('url').innerHTML = currentUrl;
    // alert(url);
    var apiUrlToHit = "https://sustcse12.xyz/api/trs/show";
    var linkToBeSent = encodeURIComponent(currentUrl);
    var finalURL = apiUrlToHit+'?link='+linkToBeSent;
    console.log(finalURL);
    $.ajax({
        type : "POST",
        url:  apiUrlToHit,
        data: { link: linkToBeSent },
        dataType: "json", 
        success : function(response) {
          console.log(response);
          document.getElementById('score').innerHTML = response.score;

            var changeq = response.score * 20;
            console.log(changeq);    
            //alert(changeq);

            $('.chart').data('easyPieChart').update(changeq);
        },
        error : function(response) {
            console.log(response);
            console.log(response.responseText);
        }
    });



    $("#submit").click(function(e){
        e.preventDefault();

        var formData = $('form#formOfRating').serialize();
        var gg = $('form#formOfRating').find('input[name="rating"]:checked').val();
        var apiUrlToHit = "https://sustcse12.xyz/api/trs/post";
 
        // console.log(formData);
        var dataToBeSent = {
            'rating': gg,
            'link' : linkToBeSent
        }
        // console.log(formData);
        // console.log('djkf');
        // // formData['url'] = linkToBeSent;

        // console.log(gg);

        // console.log(dataToBeSent);
        // $.extend(true, formData, newdata);

        // alert(linkToBeSent);
        // alert(currentUrl);

        // console.log(newdata);
        // alert(dataToBeSent);
        // alert(apiUrlToHit);
        // $('#formDiv').html("<p>Hi</p>");
        $.ajax({
            type: "POST",
            url: apiUrlToHit,
            data: dataToBeSent,
            dataType: 'json',
          
            success: function(response){
                console.log('ok success');
                console.log(response);
                // if(response.status_code == '201') {
                    var message = response.success;
                    console.log(message);
                    var message = 'Thank your for your rating. ' + '<br/><a class="btn btn-error btn-xs"  href="review.html">Any Comment??</a> <br> OR <br/> <a class="btn btn-warning btn-xs"  href="popup.html">Go Back</a>';
                    
                    // $('#formDiv').html('');
                    $('#formDiv').html(message);
                // }
            },
            error: function(response){
                console.log(response);
                console.log('Not ok, Failed');
                // var message = 'Something Went Wrong';
                var message = "";
                // console.log(response);      
            }
        }); // end of ajax
    }); 




    /// Masiur's code
    // getting the reviews from backend
    var apiUrlToHit = "https://sustcse12.xyz/api/trs/showReview";
    var linkToBeSent = encodeURIComponent(currentUrl);
    var finalURL = apiUrlToHit+'?link='+linkToBeSent;
    console.log(finalURL);
    $.ajax({
        type : "POST",
        url:  apiUrlToHit,
        data: { link: linkToBeSent },
        dataType: "json", 
        success : function(response) {
          console.log(response);
          // document.getElementById('reviews').innerHTML = response.review;
            htmlData = '';
          $.each(response.review, function(index, singleReview){
                               htmlData += '<hr><p><b>'+singleReview.name+'</b>: '+singleReview.content+'</p>';
                               
                            });
          document.getElementById('reviews').innerHTML = htmlData;
        },
        error : function(response) {
            console.log(response);
            console.log(response.responseText);
        }
    });



    // posting review
    $("#submitReview").click(function(e){
        e.preventDefault();

        var formData = $('form#formOfReview').serialize();
        var reviewData = $('#reviewData').val();
        var reviewName = $('#reviewName').val();

        var apiUrlToHit = "https://sustcse12.xyz/api/trs/postReview";
 
        // console.log(formData);
        var dataToBeSent = {
            'name': reviewName,
            'review': reviewData,
            'link' : linkToBeSent
        }
        
        $.ajax({
            type: "POST",
            url: apiUrlToHit,
            data: dataToBeSent,
            dataType: 'json',
          
            success: function(response){
                console.log('ok success');
                console.log(response);
                // if(response.status_code == '201') {
                    var message = response.success;
                    console.log(message);
                    var message = 'Thank your for your Contribution to make the Web more reliable ' + '<br/><a class="btn btn-error btn-xs"  href="pastreviews.html">Past Reviews??</a> <br> OR <br/> <a class="btn btn-warning btn-xs"  href="popup.html">Go Back</a>';

                    
                    // $('#formDiv').html('');
                    $('#formReview').html(message);
                // }
            },
            error: function(response){
                console.log(response);
                console.log('Not ok, Failed');
                // var message = 'Something Went Wrong';
                var message = "";
                // console.log(response);      
            }
        }); // end of ajax
    }); 





});

      








  // chrome.tabs.getSelected(null, function(tab) {
  //   var pageUrl = document.getElementById('url').innerHTML = tab.url;
  //    console.log(tab.url);
  //   });


 
    $(function() {
        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        
    });
   


 


function goBack() {
    window.history.back();
}




