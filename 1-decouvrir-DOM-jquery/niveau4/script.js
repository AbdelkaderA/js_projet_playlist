var listOfMovie = [];

$(document).ready(function(){
  $("button").click(function(){
    $("#list").empty();
    listOfMovie = [];
    $.get('./playlist.txt', function(data){
      var splited = splitFile(data)
      $.each(splited, function(index,movie){
        var i = movie[0];
        var n = movie[1];
        var d = movie[2];
        var movieobjet = createMovie(i,n,d);
        $('#list').append(htmlDivElement(movieobjet));
        createPlayCallback(movieobjet);
        
        $('#list').css({
          opacity: "0.60",
        });
        $('#refresh').css({
          borderRadius: "100px 20px",
          padding: "1em",
          marginTop: "1em",
          border:"5px double rgb(110, 26, 26)",
        });
        $('h1').css({
          fontSize: "80px",
          color: "rgb(88, 6, 6)",
          fontStyle: "italic",           
        });
        $('.divTitle').css({
          margin: "44px",
          color: "rgb(88, 6, 6)",
          fontSize: "20px",
        });
        $('.divIndex').css({
          margin: "24px",
          border:"5px double rgb(110, 26, 26)",
          padding:"20px",
          borderRadius: "2em",
          color: "rgb(88, 6, 6)", 
          fontSize: "20px",
        });
        $('.play').css({
          margin: "34px",
          marginLeft: "450px",
        });
        $('.divFilm').css({
          display: "flex",
          backgroundColor: "rgb(161, 159, 159)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "0.5em",
          borderRadius: "1000px 200px",
        });
        $('body').css({
          margin:"0",
          padding:"0",
          backgroundImage: "url(http://www.set-climatisation.com/wp-content/uploads/2018/10/Tours-Imax.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          textAlign: "center",
          fontFamily: "cursive",
        });
        $('.btn').css({
          fontSize: "25px",
          borderRadius: "2em",
          border:"5px double rgb(110, 26, 26)",
        });
      });
    });
  });
});

function htmlDivElement(movie){
  var html =`<div class ='divFilm'>
  <div class ='play'>
  <button class = 'btn' id="play`+movie.index+`">
  Play</button>
  </div>
  <div class = 'divIndex'>
  `+movie.index+`
  </div>
  <div class = 'divTitle'>
  `+ movie.name +': (' + movie.duree + ')'+`
  </div>
  </div>`;
  return html;
}

function createPlayCallback(movie){
$('#play'+ movie.index).click(function(){
console.log('lecture du film :'+movie.name+' , index='+ movie.index);
});
}
 
function createMovie(i, n, d                                                                                                  ){
  var movie = {};
  movie.name = n;
  movie.index = i;     
  movie.duree = d;
  return movie;
}

function splitFile(data){
  var resultat = [];
  var film = data.split('\n');
  film.forEach(ligne => {
    var tableauLigne = ligne.split(',');
    resultat.push(tableauLigne);
  });
  return resultat;
}

function addMovie(m){
  listOfMovie.push(m);
}