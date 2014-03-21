
var resultsDiv = document.getElementById('thumbnails');
var apiKey = "AIzaSyB1cilOWhgIfYXGUZ21_UwUf_ON5jJpyGU";
var request = new XMLHttpRequest();
request.open('GET', "https://www.googleapis.com/youtube/v3/search?part=snippet&q=kirkwood+ski+resort&&order=date&key=" + apiKey);

  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var results = JSON.parse(request.response);
      var items = results.items;
      
      for (var i = 0; i < items.length; i++) {
        var thumb = items[i].snippet.thumbnails.high.url;
        var videoId = items[i].id.videoId;
        var img = document.createElement('img');
        var html_video = document.createElement('iframe');
        var videoLink = document.createElement('a');
        var title = items[i].snippet.title;
        img.setAttribute('src', thumb);
        img.setAttribute('title', title);
        img.setAttribute('alt', title);
        videoLink.setAttribute('href', 'http://youtube.com/watch?v=' + videoId);
        html_video.setAttribute('src', 'http://youtube.com/embed/' + videoId + '?autoplay=1&controls=0&modestbranding=1');
        
      
        // videoLink.appendChild(img);
        videos.appendChild(html_video);
        // resultsDiv.appendChild(videoLink);
      }
    }
  };
request.send();