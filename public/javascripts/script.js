
// Declare global variables
var apiKey = "AIzaSyB1cilOWhgIfYXGUZ21_UwUf_ON5jJpyGU";
var resortID = document.getElementById('resort');
var searchTerm = resortID.getAttribute('value');


// trying to isolate the resort that is clicked on and pass in its value as a search term
var resorts = document.getElementsByTagName('a');

function getSearchKey(resorts) {
  for (var i =0; i < resorts.length; i++) {
    var resort = resorts[i];
    resort.addEventListener('click', function() {
    console.log(resort.getAttribute('value'));

    })
  }
}


// resortID.addEventListener('click', function(searchKey) {
//   var searchKey = resortID.getAttribute('value');
// });



// This function will initialize our API request and parse the returning JSON
function getJSON(url, success) {
  var request = new XMLHttpRequest();  
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var results = JSON.parse(request.response);
      success(results);
    }
  };
  request.open('GET', url);  
  request.send();  
}

// resortID.addEventListener('click', function() {
//   // event.preventDefault();

  getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ getSearchKey(resorts) + "&&order=date&key=" + apiKey, function(results) {
    var items = results.items;
    for (var i = 0; i < items.length; i++) {
          var videoId = items[i].id.videoId;
          var html_video = document.createElement('iframe');
          var br = document.createElement('br');
          var videoLink = document.createElement('a');
          html_video.setAttribute('src', 'http://youtube.com/embed/' + videoId + '?autoplay=1&controls=0&modestbranding=1');
          videos.appendChild(html_video);
          videos.appendChild(br);
    }
  })
// })

