$(document).ready(function(){
    $("#ui").children("button").click(function(listFilm){
        $("#list").empty();
        $.get('./playlist.txt', function(donnee){
            var monString = (donnee.split('\n'));
            $.each(monString, function(index,value){
                $("#list").append("<li>"+value+"</li>");                
            });
        });
    });
});
