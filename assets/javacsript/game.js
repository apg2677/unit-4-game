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
$(document).ready(function () {
   
    InitVariables();
    InitClickHandler();

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
        var enemies = $("#enemies");
        var characters = $("#characters");
      
    };
});



function InitClickHandler() {
    if (CharacterSelected==true && EnemySelected==true) {
        AppendChar("#defender");
        
       
    }
    else if (CharacterSelected==true) {
       AppendChar("#enemies");
       
       EnemySelected=true;
    
    }
    else {
        AppendChar("#userCharacter");
        
        CharacterSelected=true;
        var enemies = $("#characters");
        enemies.appendTo("#enemies");
       
    }
   

}


function DiplayStats() {
    console.log("Character: " + CharacterSelected);
    console.log("EnemySelected: " + EnemySelected);
    console.log("User Character: " + UserCharacter.name);
    console.log("HP: " + UserCharacter.HP);
    console.log("Attack Power: " + UserCharacter.AttackPower);
    
}

function AppendChar(sec) {
   
    $("#charCol1").on("click", function () {
        $(this).appendTo(sec);
        InitClickHandler();
        UserCharacter = Obi;
        if(UserCharacter.selected==true) {
            DisableClick("#charCol1")
        }
        DiplayStats();
    
    });
    $("#charCol2").on("click", function () {
        $(this).appendTo(sec);
        InitClickHandler();
        UserCharacter = Luke;
        if(UserCharacter.selected==true) {
            DisableClick("#charCol2")
        }
        DiplayStats();
    });
    $("#charCol3").on("click", function () {
        $(this).appendTo(sec);
        InitClickHandler();
        UserCharacter = DarthSidious;
        if(UserCharacter.selected==true) {
            DisableClick("#charCol3")
        }
        DiplayStats();

    });
    $("#charCol4").on("click", function () {
        $(this).appendTo(sec);
        InitClickHandler();
        UserCharacter = DarthMaul;
        if(UserCharacter.selected==true) {
            DisableClick("#charCol4")
        }
        DiplayStats();
    });
}

function DisableClick(charPicked) {
    var tempCharPicked = charPicked;
    if(tempCharPicked == "#charCol1") {
        $("#charCol1").off("click");
    }
    if(tempCharPicked == "#charCol2") {
        $("#charCol2").off("click");
    }
    if(tempCharPicked == "#charCol3") {
        $("#charCol3").off("click");
    }
    if(tempCharPicked == "#charCol4") {
        $("#charCol4").off("click");
    }

}


