var User = {
    name: "",
    HP: 0,
    AttackPower: 0,
    selected: false
};

var Luke = {
    name: "Luke",
    HP: 28,
    AttackPower: 6,
    selected: false
};
var Obi = {
    name: "Obi-wan",
    HP: 26,
    AttackPower: 8,
    selected: false
};
var DarthSidious = {
    name: "Darth Sidious",
    HP: 18,
    AttackPower: 16,
    selected: false
};
var DarthMaul = {
    name: "Darth Maul",
    HP: 2,
    AttackPower: 60,
    selected: false
};
var char1 = $("#char1");
var char2;
var char3;
var char4;
var charCol1;
var charCol2;
var charCol3;
var charCol4;
var enemyCol1;
var enemyCol2;
var enemyCol3;
var enemyCol4;
var enemiesRow;
var characters;
var UserCharacter;
var defender;
var CharacterSelected = false;
var EnemySelected = false;
var first = true;

var stage=0;
$(document).ready(function () {

    InitVariables();
    InitClickHandler();

    
});



function InitClickHandler() {
    $("#charCol1").on("click", function () {
      
        HandleAppend($(this));
        console.log(stage);


    });
    $("#charCol2").on("click", function () {
        HandleAppend(charCol2);
        console.log(stage);
    });
    $("#charCol3").on("click", function () {
        HandleAppend(charCol3);
        console.log(stage);
    });
    $("#charCol4").on("click", function () {
        HandleAppend(charCol4);
        console.log(stage);
    });

}


function DiplayStats() {
    console.log("Character: " + CharacterSelected);
    console.log("EnemySelected: " + EnemySelected);
    console.log("User Character: " + UserCharacter.name);
    console.log("HP: " + UserCharacter.HP);
    console.log("Attack Power: " + UserCharacter.AttackPower);

}

function AppendChar() {

    $("#charCol1").on("click", function () {
       console.log(stage);
        HandleAppend("#charCol1");

    });
    $("#charCol2").on("click", function () {
        console.log(stage);
        HandleAppend("#charCol2");
        
    });
    $("#charCol3").on("click", function () {
        console.log(stage);
        HandleAppend("#charCol3");
        
    });
    $("#charCol4").on("click", function () {
        console.log(stage);
        HandleAppend("#charCol3");
    });
}

function HandleAppend(charCard) {
    if(stage==0) {
        User = Obi;
        User.selected = true;
  
        $(charCard).detach();
        $("#userCharacter").append("<div class=\"user col-md-3\">"+ charCard.html() + "</div>");
        $(characters).detach();
        $(enemiesRow).append("<div class=\"col-md-12\"/>"+ characters.html() + "</div>");
        stage++;
     
        InitClickHandler();
        
    }
    else if(stage==1) {
        
        var tempCard = charCard.html();
       
        $(defender).append("<div class=\"col-md-3\">" + tempCard + "</div>");
        $(this).detach();
        InitClickHandler();
        stage++;
    }
    else {

    }

}

function CheckUserSelected(charCol) {
    if (UserCharacter.selected == false) {

        UserCharacter.selected = true;
        DisableClick(charCol);
    }
}

function DisableClick(charPicked) {
    var tempCharPicked = charPicked;
    if (tempCharPicked == "#charCol1") {
        $("#charCol1").unbind("click");
    }
    if (tempCharPicked == "#charCol2") {
        $("#charCol2").unbind("click");
    }
    if (tempCharPicked == "#charCol3") {
        $("#charCol3").unbind("click");
    }
    if (tempCharPicked == "#charCol4") {
        $("#charCol4").unbind("click");
    }

}

function InitVariables() {
    char1 = $("#char1");
    char2 = $("#char2");
    char3 = $("#char2");
    char4 = $("#char2");
    charCol1 = $("#charCol1");
    charCol2 = $("#charCol2");
    charCol3 = $("#charCol3");
    charCol4 = $("#charCol4");
    enemyCol1 = $("#enemyCol1");
    enemyCol2 = $("#enemyCol2");
    enemyCol3 = $("#enemyCol3");
    enemyCol4 = $("#enemyCol4");
    enemiesRow = $("#enemiesRow");
    characters = $("#characters");
    UserCharacter = $("#userCharacter");
    defender = $("#defender");

};

// BACKUP CODE FOR INITIALIZE CLICK HANDLER
// if (CharacterSelected==true && EnemySelected==true) {
//     AppendChar("#defender");


// }
// else if (CharacterSelected==true) {
//    AppendChar("#enemiesRow");

//    EnemySelected=true;

// }
// else if(first) {
//     AppendChar("#userCharacter");


// }
// else {
//     CharacterSelected=true;
//     var tempEnemies = $("#characters");
//     console.log("Temp Enemies: " + tempEnemies.html());
//     $("#enemiesRow").appendTo(tempEnemies.html());

// }

// BACKUP FOR APPEND
// $(this).appendTo(sec);
        // InitClickHandler();
        // UserCharacter = DarthMaul;
        // CheckUserSelected("#charCol4");
        // DiplayStats();