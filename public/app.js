$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<div class='col-sm-10' style='margin-bottom:60px;'><div class='card'><div class='card-body'><a class='title-link' href='" + data[i].link +"'><h1>" + data[i].title + "</h1></a><hr><img src='"+ data[i].imageLink + "' class='rounded float-left m-4' alt='responsive image'width='280' height='250'><hr><h2 class='card-text'>" + data[i].summary + "</h2>"
      +  "<button class='view-notes' type='button' data-target='#noteModal' data-toggle='modal' data-id='" + data[i]._id + "'>" + "View Notes" + "</button>" +
        "<button class='save-article' type='submit' data-id='" + data[i]._id + "'>" + "Save Article" + "</button></div></div>"  + "<br>" + "<br>" + "<br>"
        );
    }
  });
  
  $(document).on("click", ".scrape-new", function() {
    alert('Articles up-to-date!');
  
    $.ajax({
      method: "GET",
      url: "/scrape"
    })
      .done(function(data) {
        location.reload();
      });
  });
  $(document).on("click", "#btn-save", function() {
  $(this).addClass("disabled");
  var thisId = $(this).attr("data-id");
  console.log(thisId);

  $.ajax({
    method: "PUT",
    url: "/saved/" + thisId,
   
  })
  
  .done(function(data) {
      console.log(data);
  });
});
// when you click on view saved
$("#view-saved").on("click", function() {
 $.getJSON("/articles/" + thisId, function(data) {
    // hide articles and show saved
    $("#articles").hide();
     $("#savedArticles").show();
     $("#savedArticles").empty();
   // For each one
   for (var i = 0; i < data.length; i++) {
     // Display the information on the page
      $("#savedArticles").append("<div class='panel panel-primary'> <div class='panel-heading'><h3 data-id='" + data[i]._id + "'>" + data[i].title + "<br />" +  "</h3></div>" + "<div class='panel-body'><p>" + data[i].summary + "</p>" + "<br>" +
     "<h5>" + "<a href='" + data[i].link + "'>" + "Article link" + '</a>' + "</h5>" +
       "<button class='view-notes' type='button' data-target='#noteModal' data-toggle='modal' data-id='" + data[i]._id + "'>" + "View Notes" + "</button>" +
       "<button class='delete-article' type='submit' data-id='" + data[i]._id + "'>" + "Delete Article" + "</button></div></div>"  + "<br>" + "<br>" + "<br>"
     );
   }
 });
});
  // Whenever someone clicks a p tag
//   $(document).on("click", "p", function() {
//     // Empty the notes from the note section
//     $("#notes").empty();
//     // Save the id from the p tag
//     var thisId = $(this).attr("data-id");
  
//     // Now make an ajax call for the Article
//     $.ajax({
//       method: "GET",
//       url: "/articles/" + thisId
//     })
//       // With that done, add the note information to the page
//       .then(function(data) {
//         console.log(data);
//         // The title of the article
//         $("#notes").append("<h2>" + data.title + "</h2>");
//         // An input to enter a new title
//         $("#notes").append("<input id='titleinput' name='title' >");
//         // A textarea to add a new note body
//         $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//         // A button to submit a new note, with the id of the article saved to it
//         $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
//         // If there's a note in the article
//         if (data.note) {
//           // Place the title of the note in the title input
//           $("#titleinput").val(data.note.title);
//           // Place the body of the note in the body textarea
//           $("#bodyinput").val(data.note.body);
//         }
//       });
//   });