
//Chart Js Generate
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;
     document.getElementById('url').innerHTML = currentUrl;

    var apiUrlToHit = "https://sustcse12.xyz/api/trs/chart";
    var linkToBeSent = encodeURIComponent(currentUrl);
    var finalURL = apiUrlToHit+'?link='+linkToBeSent;
    console.log(finalURL);
    $.ajax({
        type : "POST",
        url:  apiUrlToHit,
        data: { link: linkToBeSent },
        dataType: "json", 
        success : function(response) {
         
        //pie chart
          new Chart(document.getElementById("myChart"), {
            type: 'pie',
            data: {
              labels: ["Very Untrustworthy", "Untrustworthy", "Average", "Trustworthy", "Very Trustworthy"],
              datasets: [{
                label: "Vote on URL",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [response.score_one,response.score_two,response.score_three,response.score_four,response.score_five]
              }]
            },
            options: {
              title: {
                display: true,
                text: 'User Evaluation on this URL:'
              },
              legend: {position: 'bottom'}
            }
        });
           
        },
        error : function(response) {
            console.log(response);
            console.log(response.responseText);
        }
    });



    });












