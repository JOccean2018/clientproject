/* global $ */




function displayMovie(movie){
  var titleTag = $("<h1>" + movie.Title + "</h1>");
  var imageTag = $('<img src="' + movie.Poster + '"/>');
  var dateTag=$("<p>" + movie.Year + "</p>");
  var awardeTag=$("<p>" + movie.Awards + "</p>")
  $("#content").append(titleTag); 
  $("#content").append(imageTag);
  $("#content").append(dateTag);
};

function callAPI() {
    console.log('calling api!');
    var id = $('#inputBar').val();
    $.ajax({
      url: "https://www.omdbapi.com/?apikey=90d4b10a&s=" + id,
      method: "GET",
      success: function(response) {
        //Log the whole response to the console
        console.log(response);
        var i;
        $('input').val('');
        $('#content').html('');
    for (i=0; i<11; i++){
displayMovie(response.Search[i]);

}
      }
    })
}

$('#submitButton').click(function(){
  callAPI();
})
 $('#inputBar').keypress(function (e) {
  var key = e.which;
  if(key == 13)  // the enter key code 
    {
     callAPI();
     return false;  
  }
});
