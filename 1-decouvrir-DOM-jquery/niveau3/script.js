var listOfMovie = [];
$(document).ready(function(){// completer le code ici
  $("button").click(function(){
    $("#list ul").empty();
    listOfMovie = [];
    $.get('./playlist.txt', function(data){
      var splited = splitFile(data)
        $.each(splited, function(index,movie){
          var i = movie[0];
          var n = movie[1];
          var d = movie[2];
          var movieobjet = createMovie(i,n,d);
            $('#list ul').append(htmlDivElement(movieobjet));
        });
      });
    });
  });
function htmlDivElement(movie){// completer le code ici
  var html =`<div class ='divFilm'>
  <div class = 'divIndex'>
  `+movie.index+`
  </div>
  <div class = 'divTitle'>
  `+movie.name+'('+movie.duree+')'+`
  </div>
  </div>`;
  
  return html;
}
function createMovie(i, n, d){
  var movie = {};// completer le code ici
  movie.name = n;
  movie.index = i;
  movie.duree = d;
  return movie;
}
function splitFile(data){// completer le code ici
  var resultat = [];
  var film = data.split('\n');
    film.forEach(ligne => {
      var tableauLigne = ligne.split(',');
      resultat.push(tableauLigne);
  });
  //console.log(resultat);
  return resultat;
}

function addMovie(m){
  listOfMovie.push(m);
}
    






