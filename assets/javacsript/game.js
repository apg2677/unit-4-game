var UserCharacter = {
    name:"",
    HP:0,
    AttackPower:0,
    selected:false
};

var Luke = {
    name:"Luke",
    HP:28,
    AttackPower:6,
    selected:false
};
var Obi = {
    name:"Obi-wan",
    HP:26,
    AttackPower:8,
    selected:false
};
var DarthSidious = {
    name:"Darth Sidious",
    HP:18,
    AttackPower:16,
    selected:false
};
var DarthMaul= {
    name:"Darth Maul",
    HP:2,
    AttackPower:60,
    selected:false
};


var CharacterSelected = false;
var EnemySelected = false;
var first = true;
$(document).ready(function () {
   
    InitVariables();
    // InitClickHandler("first");

    function InitVariables() {
        var char1 = $("#char1");
        var char2 = $("#char2");
        var char3 = $("#char2");
        var char4 = $("#char2");
        var charCol1 = $("#charCol1");
        var charCol2 = $("#charCol2");
        var charCol3 = $("#charCol3");
        var charCol4 = $("#charCol4");
        var enemyCol1 = $("#enemyCol1");
        var enemyCol2 = $("#enemyCol2");
        var enemyCol3 = $("#enemyCol3");
        var enemyCol4 = $("#enemyCol4");
        var enemiesRow = $("#enemiesRow");
        var characters = $("#characters");
      
    };
});



function InitClickHandler(first) {
    if (CharacterSelected==true && EnemySelected==true) {
        AppendChar("#defender");
        
       
    }
    else if (CharacterSelected==true) {
       AppendChar("#enemiesRow");
       
       EnemySelected=true;
    
    }
    else if(first) {
        AppendChar("#userCharacter");
       
        
    }
    else {
        CharacterSelected=true;
        var tempEnemies = $("#characters");
        console.log("Temp Enemies: " + tempEnemies.html());
        $("#enemiesRow").appendTo(tempEnemies.html());
       
    }
   

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
        console.log($(this));
        // HandleAppend(sec);
    
    });
    $("#charCol2").on("click", function () {
        console.log($(this));
        // $(this).appendTo(sec);
        // InitClickHandler();
        // UserCharacter = Luke;
        // CheckUserSelected("#charCol2");
        // DiplayStats();
    });
    $("#charCol3").on("click", function () {
        console.log($(this));
        // $(this).appendTo(sec);
        // InitClickHandler();
        // UserCharacter = DarthSidious;
        // CheckUserSelected("#charCol3");
        // DiplayStats();
    });
    $("#charCol4").on("click", function () {
        console.log($(this));
        // $(this).appendTo(sec);
        // InitClickHandler();
        // UserCharacter = DarthMaul;
        // CheckUserSelected("#charCol4");
        // DiplayStats();
    });
}

function HandleAppend(sec) {
    
    $(this).appendTo(sec);
    InitClickHandler();
    UserCharacter = Obi;
    CheckUserSelected("#charCol1");
    DiplayStats();
}

function CheckUserSelected(charCol) {
    if (UserCharacter.selected == false) {
       
        UserCharacter.selected = true;
        DisableClick(charCol);
    }
}

function DisableClick(charPicked) {
    var tempCharPicked = charPicked;
    if(tempCharPicked == "#charCol1") {
        $("#charCol1").unbind("click");
    }
    if(tempCharPicked == "#charCol2") {
        $("#charCol2").unbind("click");
    }
    if(tempCharPicked == "#charCol3") {
        $("#charCol3").unbind("click");
    }
    if(tempCharPicked == "#charCol4") {
        $("#charCol4").unbind("click");
    }

}


