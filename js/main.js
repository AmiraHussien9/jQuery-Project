// ********** hide navBar *******//

$(window).ready(function(){
     $(".links").animate({left: -linksWidth});  
})
let linksWidth = $(".links").innerWidth();

$(".openIcon ").click(function(){
    
    if($(".links").css("left") == "0px") {
        $(".links").animate({left: -linksWidth});    
    }
    else {
        
        $(".links").animate({left: "0px"}); 
    } 
    
});

$(".closeiCon i").click(function() {

   $(".links").animate({left: -linksWidth});
    
})


//*******************************//



// ******** Accordion code by jQuery*********//


    $("p.custom").css("display", "block");

    $(".theSinger").click(function(){
    $(this).next().slideToggle();
    $(".details-conatiner p ").not($(this).next()).slideUp();
   
})


//*****************************//


// ******cutDown Time ******//

let  timeleft;

let myfunc = setInterval(function() {
    
let countDownDate = new Date("February 1, 2022 11:37:52").getTime();
let now = new Date().getTime();
timeleft = countDownDate - now;

let days = Math.floor(timeleft / (1000 * 60 * 60 * 24)) + " D";
let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+" h";
let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))+ "m";
let seconds = Math.floor((timeleft % (1000 * 60)) / 1000)+ " s";


$(".days").text(days);
$(".hours").text(hours); 
$(".minutes").text(minutes) ;
$(".seconds").text(seconds);
    }, 1000)
    

    if (timeleft < 0) {
        clearInterval(myfunc);
        $(".days").text(" ");
        $(".hours").text(" "); 
        $(".minutes").text(" ") ;
        $(".seconds").text(" ");
        $(".end").text("TIME UP!!");
    }


//*****************************//

// let j = 99;


// $("textarea").keyup(function(event){
// // console.log(e)
// if(event.which == 32) {
//    alert("hh")
// }

//  $(".charsContent").text("Character Reamining")
// //  if($("textarea").val().length < 100) {
// //  $(".chars").text(j--)
// //  }
// // else if($("textarea").val().length > 100) {
// //     let i = j
// //     $(".chars").text(i++)
// // }

//     if($("textarea").val().length == 99) {
//         $(".chars").text("your available character finished")
//         $(".charsContent").text(" ")
//     } else if ($("textarea").val().length < 99) {
//         console.log("llss")
//     }
// //   console.log($("textarea").val().length )
// })


// // $("#ok").click(function(){
// //     alert("hh")
// // })


let max = 100 ;  
$("textarea").keyup(function() {
   let length =  $("textarea").val().length ;
   let characters = max - length ;

   if(characters <= 0 ) {
    $(".chars").text("your available character finished")
    $(".charsContent").text(" ")
    // $("textarea").prop('disabled', true);
   }
   else {
    $(".chars").text(characters)  
    $(".charsContent").text("Characters Reamining")
    
   }
})





