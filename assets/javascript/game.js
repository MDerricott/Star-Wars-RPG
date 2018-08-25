var attackActivate = false
var defenderReady = false;
var playerOneSelected = false;
var defender = "";
var player = "";
var winningMoves = 3;


var hansSolo = {
    name: "Hans Solo",
    healthPoints: 170,
    attackPower: 11,
    basePower: 11,
    counterAttackPower: 18,
    playerOne: false,
    defender: false,
    position: function () {
        $(".hans-solo").on("click", function () {
            if (!playerOneSelected) {
                playerOneSelected = true;
                defenderReady = true
                hansSolo.playerOne = true;
                $(".hans-solo").attr("id", "player-one");
                move();
                $(".princess-leia").attr("id", "defenderer");
                move();
                $(".luke-skywalker").attr("id", "defenderer");
                move();
                $(".kylo-ren").attr("id", "defenderer");
                move();
                hansSolo.score();
            }
            else if (defenderReady && $(".hans-solo").attr("id") === "defenderer" && defenderReady) {
                defenderReady = false;
                hansSolo.defender = true;
                $(".hans-solo").attr("id", "to-defend");
                moveToDefend();
                hansSolo.score();
            }
        })
    },
    score: function () {
        if (hansSolo.playerOne) {
            $(".player-one-score").text(hansSolo.healthPoints);
            player = hansSolo;
        }
        else if (hansSolo.defender) {
            $(".defender-score").text(hansSolo.healthPoints);
            defender = hansSolo;
            attackActivate = true;

        }
    },
    powerUp: function () {
        hansSolo.attackPower += hansSolo.basePower;

    }
}

var klyoRen = {
    name: "Kylo Ren",
    healthPoints: 190,
    attackPower: 12,
    basePower: 12,
    counterAttackPower: 24,
    defeated: false,
    defender: false,
    playerOne: false,
    position: function () {
        $(".kylo-ren").on("click", function () {
            if (!playerOneSelected) {
                playerOneSelected = true;
                defenderReady = true
                klyoRen.playerOne = true;
                $(".kylo-ren").attr("id", "player-one");
                move();
                $(".luke-skywalker").attr("id", "defenderer");
                move();
                $(".hans-solo").attr("id", "defenderer");
                move();
                $(".princess-leia").attr("id", "defenderer");
                move();
                klyoRen.score();
            }
            else if (playerOneSelected && $(".kylo-ren").attr("id") === "defenderer" && defenderReady) {
                defenderReady = false;
                klyoRen.defender = true;
                $(".kylo-ren").attr("id", "to-defend");
                moveToDefend();
                klyoRen.score();
            }
        })
    },
    score: function () {
        if (klyoRen.playerOne) {
            $(".player-one-score").text(klyoRen.healthPoints);
            player = klyoRen;

        } else if (klyoRen.defender) {
            $(".defender-score").text(klyoRen.healthPoints);
            defender = klyoRen;
            attackActivate = true;

        }
    },
    powerUp: function () {
        klyoRen.attackPower += klyoRen.basePower;

    }
}

var lukeSkywalker = {
    name: "Luke Skywalker",
    healthPoints: 120,
    attackPower: 10,
    basePower: 10,
    counterAttackPower: 16,
    defeated: false,
    defender: false,
    playerOne: false,
    position: function () {
        $(".luke-skywalker").on("click", function () {
            if (!playerOneSelected) {
                playerOneSelected = true;
                defenderReady = true
                lukeSkywalker.playerOne = true;
                $(".luke-skywalker").attr("id", "player-one");
                move();
                $(".princess-leia").attr("id", "defenderer");
                move();
                $(".hans-solo").attr("id", "defenderer");
                move();
                $(".kylo-ren").attr("id", "defenderer");
                move();
                lukeSkywalker.score();
            }
            else if (playerOneSelected && $(".luke-skywalker").attr("id") === "defenderer" && defenderReady) {
                defenderReady = false;
                lukeSkywalker.defender = true;
                $(".luke-skywalker").attr("id", "to-defend");
                moveToDefend();
                lukeSkywalker.score();
            }
        })
    },
    score: function () {
        if (lukeSkywalker.playerOne) {
            $(".player-one-score").text(lukeSkywalker.healthPoints);
            player = lukeSkywalker;
        }
        else if (lukeSkywalker.defender) {
            $(".defender-score").text(lukeSkywalker.healthPoints);
            defender = lukeSkywalker;
            attackActivate = true;
        }
    },
    powerUp: function () {
        lukeSkywalker.attackPower += lukeSkywalker.basePower;

    }
}

var princessLeia = {
    name: "Princess Leia",
    healthPoints: 140,
    basePower: 13,
    attackPower: 13,
    counterAttackPower: 17,
    defeated: false,
    defender: false,
    playerOne: false,
    position: function () {
        $(".princess-leia").on("click", function () {
            if (!playerOneSelected) {
                playerOneSelected = true;
                defenderReady = true
                princessLeia.playerOne = true;
                $(".princess-leia").attr("id", "player-one");
                move();
                $(".luke-skywalker").attr("id", "defenderer");
                move();
                $(".hans-solo").attr("id", "defenderer");
                move();
                $(".kylo-ren").attr("id", "defenderer");
                move();
                princessLeia.score();
            }
            else if (playerOneSelected && $(".princess-leia").attr("id") === "defenderer" && defenderReady) {
                defenderReady = false;
                princessLeia.defender = true;
                $(".princess-leia").attr("id", "to-defend");
                moveToDefend();
                princessLeia.score();

            }
        })
    },
    score: function () {
        if (princessLeia.playerOne) {
            $(".player-one-score").text(princessLeia.healthPoints);
            player = princessLeia;

        }
        else if (princessLeia.defender) {
            $(".defender-score").text(princessLeia.healthPoints);
            defender = princessLeia;
            attackActivate = true;
        }
    },
    powerUp: function () {
        princessLeia.attackPower += princessLeia.basePower;

    }
}

function move() {
    $(".ready-player-one").append($("#player-one"));
    $(".defender-area").append($("#defenderer"));
}
function moveToDefend() {
    $(".defender").append($("#to-defend"));
    $(".defender-area").append($("#defenderer"));
}
var attackMode = function () {
    $(".attack-button").on("click", function () {
        if (attackActivate) {
            (defender.healthPoints > 0 && player.healthPoints > 0)
            defender.healthPoints -= player.attackPower;
            player.healthPoints -= defender.counterAttackPower;
            console.log("playing d hp" + defender.healthPoints);
            console.log("playing p hp" + player.healthPoints);
            console.log("playing d ca" + defender.counterAttackPower);
            console.log("playing p ap" + player.attackPower);
            $(".defender-score").text(defender.healthPoints);
            $(".player-one-score").text(player.healthPoints);
            $(".battle-notes1").text("You attacked " + defender.name + " for " + player.attackPower + " damage!");
            $(".battle-notes2").text(defender.name + " attacked you for " + defender.counterAttackPower + " damage!");
            player.powerUp();
           

            if (player.healthPoints <= 0 && (defender.healthPoints > 0 || defender.healthPoints < 0)) {
                console.log("defeated def hp " + defender.healthPoints);
                console.log("defeated play hp " + player.healthPoints);
                console.log("deafeated def ca" + defender.counterAttackPower);
                console.log("defeated play ap " + player.attackPower);
                $(".battle-notes1").append("You have been defeated");
                $(".battle-notes2").empty();
                $(".battle-notes2").append('<div class="reset">');
                $(".reset").text("Reset Game");
                $(".reset").on("click", function () {
                    location.reload();
              
                });

            }
            else if (defender.healthPoints <= 0 && player.healthPoints > 0) {
                player.attackPower -= player.basePower;
                console.log("Winning d hp" + defender.healthPoints);
                console.log("Winning p hp" + player.healthPoints);
                console.log("Winning d ca" + defender.counterAttackPower);
                console.log("Winning p ap " + player.attackPower);
                $("#to-defend").remove()
                $(".defender-score").empty();
                defenderReady = true;
                winningMoves--;
                
                if (winningMoves === 0) {
                    $(".battle-notes1").append("You win the Game!");
                    $(".battle-notes2").empty();
                    $(".battle-notes2").append('<div class="reset">');
                    $(".reset").text("Reset Game");
                    $(".reset").on("click", function () {
                        location.reload();
                    });
                }

                else {
                    $(".battle-notes1").append("Select your new defender!");
                    $(".battle-notes2").empty();
                }
            }
        }
    });

}



hansSolo.position();
klyoRen.position();
princessLeia.position();
lukeSkywalker.position();

attackMode();





