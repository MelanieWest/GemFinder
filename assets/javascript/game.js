
$(document).ready(function(){
    
//Each new start of game, these values need
//to be set/reset: 

var wins   = 0;
var losses = 0;

$(".stats").hide();  // hide w/l data until game starts
$(".endgamewin").hide();
$(".endgameloss").hide();  

//new game resets stats

$(".btn").on("click",function(){

  var Score  = 0;

  //initialize a random # between 19 and 120:
  // this will be the target value to hit

  var ranNum = Math.floor(Math.random()*102+19);
  console.log(ranNum);

  $(".goal").html(ranNum);
  $(".score").html(Score);
  $(".endgamewin").hide();
  $(".endgameloss").hide();  
  $(".info").hide();
  $(".stats").show();  
  $(".Wins").html(" W: "+ wins);
  $(".Losses").html(" L: " + losses);
   
  //initialize the values of each snowflake
  //(let them take values between 1 and 12)

  var val1 = Math.floor(Math.random()*12+1);
  $("#img1").val(val1);
  var val2 = Math.floor(Math.random()*12+1);
  $("#img2").val(val2);
  var val3 = Math.floor(Math.random()*12+1);
  $("#img3").val(val3);
  var val4 = Math.floor(Math.random()*12+1);
  $("#img4").val(val4);
  console.log(val1,val2,val3,val4);
  
});  // end of sequence with 'new' click
  
 
$(".flake").on("click", function(){

    var s = $(".score").html();
    var g = $(".goal").html();

    var total = parseInt(s);
    var Goal  = parseInt(g);

    var fv = $(this).val();
    flakeVal = parseInt(fv);
    total += flakeVal;
    $(".score").html(total);
    console.log(s);
   
    if (total == Goal){
        wins += 1;
        $(".Wins").html(" W: "+ wins);
        $(".endgamewin").show();
    }
        else if (total > Goal){
        losses += 1;
        $(".Losses").html(" L: " + losses);
        $(".endgameloss").show();
    }
});



});