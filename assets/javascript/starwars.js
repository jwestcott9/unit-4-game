$(document).ready(function () {
    $(".firstround").hide();
    $(".secondround").hide();
    $("#yourCharacter").hide();
    $(".enemy").hide();
    $("#enemiesToFight").hide();

    
    // global variables
    var counterAttack = 0;
    var userChar = "";
    var defender = "";
    var alert = "";
    var attackgain = 6;
    var result = 0;
    var enemyResult = 0;
    var oponent = "";
    var isSelected = false;
    var x = 0;
    var forceLightning =0;

    function printAlert(x) {
        $("#alert").text(x);
    }

    // Characters 
    var luke = {
        Name: "Luke Skywalker",
        attackpower: 8,
        attackgain: 20,
        Hp: 200,
        printhealth: function (x) {
            $("#LukeHp").text(x);
        },
        id: "#luke",
    }
    var maceWindu = {
        Name: "maceWindu",
        attackpower: 200,
        attackgain: 20,
        Hp: 150,
        printhealth: function (x) {
            $("#maceWinduHp").text(x);
        },
        id: "#maceWindu",
    }
    var yoda = {
        Name: "yoda",
        attackpower: (Math.floor(Math.random() * 900)),
        Hp: 200,
        printhealth: function (x) {
            $("#yodaHp").text(x);
        },
        id: "#yoda",
    }
    var obiWan = {
        Name : "obiWan",
        attackpower: 15,
        attackgain: 10,
        Hp: 250,
        printhealth: function (x) {
            $("#obiWanHp").text(x);
        },
        id: "#obiWan",
    }
    var stormTrooper = {
        Name: "The Storm Trooper",
        Hp: 80,
        attackpower: 10,
        printhealth: function (x) {
            $("#stormTrooperHp").text(x);
        },
        id: "#stormTrooper",
    }
    var jangFet = {
        Name: "Jango Fett",
        Hp: 120,
        attackpower: 20,
        printhealth: function (x) {
            $("#jangFetHp").text(x);
        },
        id:"#jangFet",
    }
    var captainPhasma = {
        Name: "Captain Phasma",
        Hp: 150,
        attackpower: 30,
        printhealth: function (x) {
            $("#captainPhasmaHp").text(x);
        },
        id: "#captainPhasma",
    }
    var royalGuard = {
        Name: "the Royal Guard",
        Hp: 200,
        attackpower: 50,
        printhealth: function (x) {
            $("#royalGuardHp").text(x);
        },
        id: "#royalGuard",
    }

    var kyloRen = {
        Name: "Kylo Ren",
        Hp: 200,
        attackpower: 60,
        printhealth: function (x) {
            $("#kyloRenHp").text(x);
        },
        id: "#kyloRen",
    }

    var darthVader = {
        Name: "Darth Vader",
        Hp: 400,
        attackpower: 75,
        printhealth: function (x){
            $("#darthVaderHp").text(x);
        },
        id: "#darthVader",
   }

   var darthSidius = {
       Name: "Darth Sidius",
       Hp: 1000,
       attackpower: function (){
          
           if ((Math.floor(Math.random()*2)) =1 ){
                return "FORCE LIGHTNING" + 750;}
           else {
                return 0;
           }
       },
       id: "#darthSidius",
       printhealth: function (x){
        $("#darthSidiusHp").text(x);
    },
   }

   var snoke = {
       Name: "Snoke",
       Hp: 1500,
       attackpower: 0,
    id: "#snoke",
    printhealth: function (x){
        $("#snokeHp").text(x)
   }}

   console.log(yoda.attackpower);

    // Select character logic
    $(".startCharacter").on("click", function () {
        $(".enemy").show();
        $("#enemiesToFight").show();    
        $("#yourCharacter").show();
        $("#chooseYourCharacter").hide();
        $(".startCharacter").hide();
        $(".blank").hide();
        $(".firstround").show();
        $(this).appendTo("#yourCharacter")
        $(this).show();
        $(this).removeClass("startCharacter");
        $(this).addClass("charstyle");
        switch (this.id) {
            default:
                $("#LukeHp").text(luke.Hp);
                userChar = luke;
                break;
            case "maceWindu":
                $("#maceWinduHp").text(maceWindu.Hp);
                userChar = maceWindu;
                break;
            case "yoda":
                $("#yodaHp").text(yoda.Hp);
                userChar = yoda;
                break;
            case "obiWan":
                $("#obiWanHp").text(obiWan.Hp);
                userChar = obiWan;
        }
        console.log(userChar);
    });

    // Select Enemy logic 
    $(".firstTier").on("click", function () {
        if (isSelected === false){
        $(this).appendTo(".enemy")
        $(this).show();
        switch (this.id) {
            default:
                oponent = stormTrooper;
                isSelected = true;
                break;
            case ("jangFet"):
                oponent = jangFet;
                isSelected = true;
                break;
            case ("captainPhasma"):
                oponent = captainPhasma;
                isSelected = true;
                break;
            case ("royalGuard"):
                oponent = royalGuard;
                isSelected = true;


        }}

    })
    // Second tier Logic
    $(".secondTier").on("click", function () {
        if (isSelected === false){
        $(this).appendTo(".enemy")
        $(this).show();
        switch (this.id) {
            default:
                oponent = kyloRen;
                isSelected = true;
                break;
            case ("darthVader"):
                oponent = darthVader;
                isSelected = true;
                break;
            case ("darthSidius"):
                oponent = darthSidius;
                isSelected = true;
                break;
            case ("snoke"):
                oponent = snoke;
                isSelected = true;


        }}

    })
    // Battle function
    $(".btn").on("click", function battle () {
        console.log(userChar.attackpower)
        if (oponent === "") {
            alert = "Select a character to attack";
            printAlert(alert);
        }
        if (userChar === yoda ){
            userChar.attackpower = (Math.floor(Math.random() * 900))
        }
        if (oponent === darthSidius || oponent === snoke){
            var randomNumber = (Math.floor(Math.random()*3))
            
            if (randomNumber === 1){
                oponent.attackpower = 750;
            }
            else {
                oponent.attackpower = 0;
            }
        }
        
        
        if (oponent.Hp >0 && userChar.Hp >0){
        oponent.Hp = oponent.Hp - userChar.attackpower;
        if (oponent.Hp <= 0 ){
            x++;
            $(oponent.id).hide();
            printAlert(userChar.Name + " has defeated " + oponent.Name + ". please select another oponent")
            isSelected = false;
            if (x === 4){
                $(".secondround").show();
                function alert(){
                alert("congrats you have beat the royal guard now you must face the sith lords, you have been granted 400 health to assist you, may the force be with you ");}
                    userChar.Hp = userChar.Hp + 400;
                    userChar.printhealth(userChar.Hp)
                
            }
        }else{
        userChar.Hp = userChar.Hp - oponent.attackpower;
        userChar.attackpower = userChar.attackpower + userChar.attackgain;
        printAlert(userChar.Name + " attacked " + oponent.Name + " for " + 
        userChar.attackpower + " and " + oponent.Name + " counter attacked for " + oponent.attackpower);
        userChar.printhealth(userChar.Hp);
        oponent.printhealth(oponent.Hp);}}
        

        if (userChar.Hp<=0){
            var counter =0 
            counter ++ 
            $("#chooseYourCharacter").show();
            $(".startCharacter").show();
            $("#chooseYourCharacter").appendTo("chooseCharacterRow");
            $(userChar.id).addClass("deadChar");
            if (counter ===4) { printAlert(oponent.Name + " has defeated all of the jedis at your disposal.. you lose")}else{
            printAlert(userChar.Name + " has been defeated by " + oponent.Name + ". You may select another Jedi to continue")
        }}
    })
})