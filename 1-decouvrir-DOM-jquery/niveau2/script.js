var listOfMovie = [];
$(document).ready(function(){// completer le code ici
    $("button").click(function(){
        $("#list ul").empty();
        listOfMovie = [];
        $.get('./playlist.txt', function(data){
            $.each(splitFile(data), function(index,name){
                $('#list ul').append(htmlDivElement(name));
            });
        });
    });
});


function htmlDivElement(name){// completer le code ici
    return `<div class ='divFilm'>${name}</div>`;
}

 
function splitFile(data){// completer le code ici
    return data.split('\n');
}
