var hansSolo = {
    name: "Hans Solo",
    healthPoints: 6,
    attackPower: 6,
    counterAttackPower: 3,
    defeated: false,
    defender: false,
}

var klyoRen = {
    name: "Kylo Ren",
    healthPoints: 6,
    attackPower: 6,
    counterAttackPower: 3,
    defeated: false,
    defender: false,
}


$(".hans-solo").on("click",function(){
    console.log("clicked");
    $(".hans-solo").attr("id", "player-one");
    move();
    $(".princess-leia").attr("id","defenderer");
    move();
    $(".luke-skywalker").attr("id","defenderer");
    move();
    $(".kylo-ren").attr("id","defenderer");
   move();
});

function move(){
$(".ready-player-one").append($("#player-one"));
$(".defender-area").append($("#defenderer"));
}

