// I am jquery novice so if your planning on copying some of this code...I wouldn't advise it


//These add all the background colors to the hands
    $("#player1_rock").mousedown(function () { 
      $("#player1_color").removeClass("hideit"),
      $("#player1_display").addClass("play_rock");
    });
    $("#player1_paper").mousedown(function () {
          $("#player1_color").removeClass("hideit"),
      $("#player1_display").addClass("play_paper");
    });
    $("#player1_scissors").mousedown(function () { 
      $("#player1_color").removeClass("hideit"),
      $("#player1_display").addClass("play_scissors");
    });

    $("#flesh_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("flesh");
    });

    $("#flesh2_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("flesh2");
    });

    $("#brown_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("brown");
    });

    $("#brown2_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("brown2");
    });

    $("#brown3_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("brown3");
    });

    $("#yellow_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("yellow");
    });

    $("#white_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("white");
    });

    $("#martian_1").mousedown(function () { 
      $("#player1_color").removeClass(),
      $("#player1_color").addClass("hideit"),
      $("#player1_color").addClass("martian");
    });
 
//some variables to flag when certain buttons are pressed to find the winner
    $rock1 = null;
    $paper1 = null;
    $scissors1 = null;
    $rock2 = null;
    $paper2 = null;
    $scissors2 = null;

//when you press down buttons...
$(document).keydown( function(eventObject) {
     if(eventObject.which==65) {//a
        $rock1 = true,                                 //flag that player 1 played rock
        $("#player1_color").removeClass("hideit"),     //show bg color on hands by removing the hideit class
        $("#player1_display").addClass("play_rock"),   //show the Rock image by adding a class
        $("#player1_rock").addClass("hilite");         //make the letter button 'A' turn red
     } else if(eventObject.which==83) {//s
        $paper1 = true,
        $("#player1_color").removeClass("hideit"),
        $("#player1_display").addClass("play_paper"),
        $("#player1_paper").addClass("hilite");
     } else if(eventObject.which==68) {//d
        $scissors1 = true,
        $("#player1_color").removeClass("hideit"),
        $("#player1_display").addClass("play_scissors"),
        $("#player1_scissors").addClass("hilite");
     }
     if(eventObject.which==76) {//l
        $rock2 = true,
        $("#player2_color").removeClass("hideit"),
        $("#player2_display").addClass("play_rock2"),
        $("#player2_rock").addClass("hilite");
     } else if(eventObject.which==186 || eventObject.which==59) {//;
        $paper2 = true,
        $("#player2_color").removeClass("hideit"),
        $("#player2_display").addClass("play_paper2"),
        $("#player2_paper").addClass("hilite");
     } else if(eventObject.which==222) {//'
        $scissors2 = true,
        $("#player2_color").removeClass("hideit"),
        $("#player2_display").addClass("play_scissors2"),
        $("#player2_scissors").addClass("hilite");
     }
     
     //These calculate the winners and show the winning stuff
     if($rock1==true && $scissors2==true) {//l
        $("#player1_color").addClass("hideit"),     //hide the bg color of player1 hands by adding the hideit class
        $("#player1_display").removeClass();        //hide hand images by removing all classes from the display
        $("##player1_rock #player1_scissors #player1_paper #player2_rock #player2_scissors #player2_paper").removeClass("hilite");  //make sure all buttons are not filled in
        $("#player2_color").addClass("hideit"),     //hide the bg color for player2
        $("#player2_display").removeClass();        //hide the hand images for player2
        $("#win_display").addClass("rockWin"),      //Show the correct winning image by adding a class
        $("#player1_wins").removeClass("hideit");   //Show the 'player 1 wins' text by removing the hideit class
     } else if($rock1==true && $paper2==true) {//l
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass();
        $("##player1_rock #player1_scissors #player1_paper #player2_rock #player2_scissors #player2_paper").removeClass("hilite");
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass();
        $("#win_display").addClass("paperWin"),
        $("#player2_wins").removeClass("hideit");        
     } else if($scissors1==true && $paper2==true) {//l
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass();
        $("##player1_rock #player1_scissors #player1_paper #player2_rock #player2_scissors #player2_paper").removeClass("hilite");
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass();
        $("#win_display").addClass("scissorsWin"),
        $("#player1_wins").removeClass("hideit");        
     } else if($scissors1==true && $rock2==true) {//l
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass();
        $("##player1_rock #player1_scissors #player1_paper #player2_rock #player2_scissors #player2_paper").removeClass("hilite");
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass();
        $("#win_display").addClass("rockWin"),
        $("#player2_wins").removeClass("hideit");        
     } else if($paper1==true && $scissors2==true) {//l
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass();
        $("##player1_rock #player1_scissors #player1_paper #player2_rock #player2_scissors #player2_paper").removeClass("hilite");
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass();
        $("#win_display").addClass("scissorsWin"),
        $("#player2_wins").removeClass("hideit");        
     } else if($paper1==true && $rock2==true) {//l
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass();
        $("##player1_rock #player1_scissors #player1_paper #player2_rock #player2_scissors #player2_paper").removeClass("hilite");
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass();
        $("#win_display").addClass("paperWin"),
        $("#player1_wins").removeClass("hideit");        
    }} );
    
$(document).keyup( function(eventObject) {
     if(eventObject.which==65) {//a
        $("#win_display").removeClass(),
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass();
        $("#player1_rock").removeClass("hilite"),
        $("#player1_wins").addClass("hideit"),  
        $("#player2_wins").addClass("hideit"),        
        $rock1 = null;
     } else if(eventObject.which==83) {//s
        $("#win_display").removeClass(),
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass(),
        $("#player1_paper").removeClass("hilite"),
        $("#player1_wins").addClass("hideit"),   
        $("#player2_wins").addClass("hideit"),        
        $paper1 = null;
     } else if(eventObject.which==68) {//d
        $("#win_display").removeClass(),
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass(),
        $("#player1_scissors").removeClass("hilite"),
        $("#player1_wins").addClass("hideit"),      
        $("#player2_wins").addClass("hideit"),        
        $scissors1 = null;
     }
     if(eventObject.which==76) {//l
        $("#win_display").removeClass(),
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass();
        $("#player2_rock").removeClass("hilite"),
        $("#player1_wins").addClass("hideit"),   
        $("#player2_wins").addClass("hideit"),        
        $rock2 = null;
     } else if(eventObject.which==186 || eventObject.which==59) {//;
        $("#win_display").removeClass(),
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass(),
        $("#player2_paper").removeClass("hilite"),
        $("#player1_wins").addClass("hideit"),      
        $("#player2_wins").addClass("hideit"),        
        $paper2 = null;
     } else if(eventObject.which==222) {//'
        $("#win_display").removeClass(),
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass(),
        $("#player2_scissors").removeClass("hilite"),
        $("#player1_wins").addClass("hideit"), 
        $("#player2_wins").addClass("hideit"),        
        $scissors2 = null;
     }
} );

    $("#player1_rock, #player1_paper, #player1_scissors").mouseup(function () { 
        $("#player1_color").addClass("hideit"),
        $("#player1_display").removeClass();
    });

//Player 2 scripts
    $("#player2_rock").mousedown(function () { 
      $("#player2_color").removeClass("hideit"),
      $("#player2_display").addClass("play_rock2");
    });
    $("#player2_paper").mousedown(function () {
      $("#player2_color").removeClass("hideit"),
      $("#player2_display").addClass("play_paper2");
    });
    $("#player2_scissors").mousedown(function () { 
      $("#player2_color").removeClass("hideit"),
      $("#player2_display").addClass("play_scissors2");
    });

    $("#flesh_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("flesh");
    });

    $("#flesh2_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("flesh2");
    });

    $("#brown_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("brown");
    });

    $("#brown2_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("brown2");
    });

    $("#brown3_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("brown3");
    });

    $("#yellow_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("yellow");
    });

    $("#white_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("white");
    });

    $("#martian_2").mousedown(function () { 
      $("#player2_color").removeClass(),
      $("#player2_color").addClass("hideit"),
      $("#player2_color").addClass("martian");
    });

    $("#player2_rock, #player2_paper, #player2_scissors").mouseup(function () { 
        $("#player2_color").addClass("hideit"),
        $("#player2_display").removeClass();
    });
