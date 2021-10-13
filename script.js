// 1 uzduotis
$("#fadeToggle").click(function (e) { 
    e.preventDefault();
    $(".cube1").fadeToggle(300);
});

// 2 uzduotis
$("#width").click(function (e) { 
    e.preventDefault();
    $(".cube2").width(50);
});
$("#height").click(function (e) { 
    e.preventDefault();
    $(".cube2").height(50);
});

$("#center").click(function (e) { 
    e.preventDefault();
    $("#cube2").css({
        "margin-left": "0",
        "margin-right": "0"

    });
});

$("#left").click(function (e) { 
    e.preventDefault();
    $("#cube2").css({
        "margin-right": "400px"
    });
});

// 3 uzduotis
$("#burger").click(function () { 
    $("#linkContainer").toggleClass("linkContainerShow");
});

// 4 uzduotis

$(".cubeContainer").click(function (e) { 
    e.preventDefault();

    var colors = [];

    for(var i = 0; i<6; i++) {
    colors[i] = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    }
    $("#color1").css({
        'background-color' : colors[0],
      });
    $("#color2").css({
        'background-color' : colors[1],
      });
    $("#color3").css({
        'background-color' : colors[2],
      });
    $("#color4").css({
        'background-color' : colors[3],
      });
    $("#color5").css({
        'background-color' : colors[4],
      });
});

// 5 uzduotis

// KOL KAS UZSTRIGES SU DATA
// Galiu padaryti nebent tik su gimimo metais, bet ne su diena ir menesiu.
