var hansSolo = {
    name: "Hans Solo",
    healthPoints: 6,
    attackPower: 6,
    counterAttackPower: 3,
    playerOne: false,
    defender: false,
    position: function (){$(".hans-solo").on("click",function(){
        if(!playerOneSelected){
            playerOneSelected = true;
            defenderReady = true
            hansSolo.playerOne = true;
            $(".hans-solo").attr("id", "player-one");
            move();
            $(".princess-leia").attr("id","defenderer");
            move();
            $(".luke-skywalker").attr("id","defenderer");
            move();
            $(".kylo-ren").attr("id","defenderer");
            move();
            hansSolo.score();
        }
        else if(defenderReady && $(".hans-solo").attr("id")=== "defenderer" && defenderReady){
            defenderReady = false;
            hansSolo.defender = true;
            $(".hans-solo").attr("id", "to-defend");
            moveToDefend(); 
            hansSolo.score();
        }
    })},
    score: function(){
        if(hansSolo.playerOne){
            $(".player-one-score").text(this.healthPoints);
        }
        else if (hansSolo.defender){
            $(".defender-score").text(this.healthPoints);
        }
    }
}

var klyoRen = {
    name: "Kylo Ren",
    healthPoints: 6,
    attackPower: 6,
    counterAttackPower: 3,
    defeated: false,
    defender: false,
    playerOne: false,
    position: function(){ $(".kylo-ren").on("click",function(){
        if(!playerOneSelected){
            playerOneSelected = true;
            defenderReady = true
            klyoRen.playerOne = true;
            $(".kylo-ren").attr("id", "player-one");
            move();
            $(".luke-skywalker").attr("id","defenderer");
            move();
            $(".hans-solo").attr("id","defenderer");
            move();
            $(".princess-leia").attr("id","defenderer");
            move();
            klyoRen.score();
        }
        else if(playerOneSelected && $(".kylo-ren").attr("id")=== "defenderer" && defenderReady){
            defenderReady = false;
            klyoRen.defender = true;
            $(".kylo-ren").attr("id", "to-defend");
            moveToDefend();  
            klyoRen.score(); 
        }
    })},
    score: function(){
        if(klyoRen.playerOne){
            $(".player-one-score").text(this.healthPoints);
       }else if (klyoRen.defender){
        $(".defender-score").text(this.healthPoints);
       }
    }
}

var lukeSkywalker = {
    name: "Luke Skywalker",
    healthPoints: 6,
    attackPower: 6,
    counterAttackPower: 3,
    defeated: false,
    defender: false,
    playerOne: false,
    position: function() {$(".luke-skywalker").on("click",function(){
        if(!playerOneSelected){
            playerOneSelected = true;
            defenderReady = true
            lukeSkywalker.playerOne = true;
            $(".luke-skywalker").attr("id", "player-one");
            move();
            $(".princess-leia").attr("id","defenderer");
            move();
            $(".hans-solo").attr("id","defenderer");
            move();
            $(".kylo-ren").attr("id","defenderer");
            move();
            lukeSkywalker.score();
        }
        else if(playerOneSelected && $(".luke-skywalker").attr("id")=== "defenderer" && defenderReady){
            defenderReady = false;
            lukeSkywalker.defender = true;
            $(".luke-skywalker").attr("id", "to-defend");
            moveToDefend();   
            lukeSkywalker.score();
        }
    })},
    score: function(){
        if(klyoRen.playerOne){
            $(".player-one-score").text(this.healthPoints);
       }
       else if(lukeSkywalker.defender){
            $(".defender-score").text(this.healthPoints);
       } 
    }
}

var princessLeia = {
    name: "Princess Leia",
    healthPoints: 6,
    attackPower: 6,
    counterAttackPower: 3,
    defeated: false,
    defender: false,
    playerOne: false,
    position: function() {$(".princess-leia").on("click",function(){
        if(!playerOneSelected){
            playerOneSelected = true;
            defenderReady = true
            princessLeia.playerOne = true;
            $(".princess-leia").attr("id", "player-one");
            move();
            $(".luke-skywalker").attr("id","defenderer");
            move();
            $(".hans-solo").attr("id","defenderer");
            move();
            $(".kylo-ren").attr("id","defenderer");
            move();
            princessLeia.score();
        }
        else if(playerOneSelected && $(".princess-leia").attr("id")=== "defenderer" && defenderReady){
            defenderReady = false;
            princessLeia.defender = true;
            $(".princess-leia").attr("id", "to-defend");
            moveToDefend();  
            princessLeia.score(); 
        }
    })},
    score: function(){
        if(princessLeia.playerOne){
            $(".player-one-score").text(this.healthPoints);
       }
       else if(princessLeia.defender){
        $(".defender-score").text(this.healthPoints);
       }
    }
}


function move(){
    $(".ready-player-one").append($("#player-one"));
    $(".defender-area").append($("#defenderer"));
    }
function moveToDefend(){
    $(".defender").append($("#to-defend"));
    $(".defender-area").append($("#defenderer"));
        }

    
var defenderReady = false;
var playerOneSelected = false;
hansSolo.position();
klyoRen.position();
princessLeia.position();
lukeSkywalker.position();



