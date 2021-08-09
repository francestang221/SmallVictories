// Code adapted from my CS 290 Activity 5 - POST Form Test

// display the victories

document.getElementById('submit').addEventListener('click', function(event) {
    // make the request object
    var req = new XMLHttpRequest();
    var data = {};
    data.victory = document.getElementById('victory').value;

    if(!data.victory) {
        alert('You made it to our website! That is a small victory itself!')
    }

    req.open('POST', 'http://httpbin.org/post', true);
  
    req.setRequestHeader('Content-Type', 'application/json');
  
    // callback
    req.addEventListener('load', function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        var res = JSON.parse(response.data)
        var victory = res.victory;

        if(data.victory) {   
        // display the outputs as a list
        var ul = document.getElementById('victories');
        var li = document.createElement('li');
        li.textContent = 'I feel great! \n I ' + victory + '!';
        ul.appendChild(li);
        var img = document.createElement('img');
        img.src = "https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif";
        ul.appendChild(img);
        }
      } else {
        console.log("Error in network request: " + req.statusText);
      }
    });
    req.send(JSON.stringify(data));
    event.preventDefault();
  });