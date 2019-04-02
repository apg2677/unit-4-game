var User = {
    name: "",
    HP: 0,
    AttackPower: 0,
    selected: false,
    stage: 0
};
var Enemy = {
    name:"",
    HP:0,
    AttackPower:0,
    selected:false,
    stage:0
}
var Luke = {
    name: "Luke",
    HP: 28,
    AttackPower: 6,
    selected: false,
    stage: 0

};
var Obi = {
    name: "Obi-wan",
    HP: 26,
    AttackPower: 8,
    selected: false,
    stage: 0
};
var DarthSidious = {
    name: "Darth Sidious",
    HP: 18,
    AttackPower: 16,
    selected: false,
    stage: 0
};
var DarthMaul = {
    name: "Darth Maul",
    HP: 2,
    AttackPower: 60,
    selected: false,
    stage: 0
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
var baseAttack;
var hits=0;
var defender2;

var stage = 0;
$(document).ready(function () {

    InitVariables();
    InitClickHandler();
    $("#btnAttack").click(function() {
        Attack();
        DisplayStats();
    });

});



function InitClickHandler() {
    $("#charCol1").on("click", function () {
        $(this).detach();
        HandleAppend(charCol1, "obi");
        console.log(stage);


    });
    $("#charCol2").on("click", function () {
        $(this).detach();
        HandleAppend(charCol2, "luke");
        console.log(stage);
    });
    $("#charCol3").on("click", function () {
        $(this).detach();
        HandleAppend(charCol3, "sid");
        console.log(stage);
    });
    $("#charCol4").on("click", function () {
        $(this).detach();
        HandleAppend(charCol4, "maul");
        console.log(stage);
    });

}


function DiplayStatsConsole() {
    console.log("Character: " + CharacterSelected);
    console.log("EnemySelected: " + EnemySelected);
    console.log("User Character: " + UserCharacter.name);
    console.log("HP: " + UserCharacter.HP);
    console.log("Attack Power: " + UserCharacter.AttackPower);

}



function HandleAppend(charCard, objChar) {
    if (stage == 0) {
        AssignUser(objChar);

        User.selected = true;
        User.stage = 1;
        $(charCard).detach();
        $("#userCharacter").append("<div class=\"user col-md-3\">" + charCard.html() + "</div>");
        $(characters).detach();
        $(enemiesRow).append("<div class=\"col-md-12\"/>" + characters.html() + "</div>");
        stage++;

        DisplayStats();

        InitClickHandler();

    }
    else if (stage == 1) {
        AssignEnemy(objChar);
        $(defender).append("<div class=\"col-md-12\"/>" + charCard.html() + "</div>");
        stage++;
        DisplayStats();
        InitClickHandler();
        Enemy.stage = 1;
    }
    else if (stage == 2) {
       $("#btnAttack").after("<div id=\"defender\" class=\"row\"></div>");
       defender = $("#defender"); 
       $(defender).append("<div class=\"col-md-12\"/>" + charCard.html() + "</div>");
        InitClickHandler();
        stage++;
        alert("stage 2");
    }
    else {
        // InitClickHandler();
    }

}

function DisplayStats() {
    $("#divUserName").text(User.name);
    console.log(User.name);
    $("#divUserAtt").text(User.AttackPower);
    $("#divUserHP").text(User.HP);

    $("#divEnemyName").text(Enemy.name);
    $("#divEnemyAtt").text(Enemy.AttackPower);
    $("#divEnemyHP").text(Enemy.HP);
}


function AssignUser(objChar) {
    switch (objChar) {
        case "obi":
            {
                User = Obi;
                break;
            }
        case "luke":
            {
                User = Luke;
                break;
            }
        case "sid":
            {
                User = DarthSidious;
                break;
            }
        case "maul":
            {
                User = DarthMaul;
                break;
            }

    }
}

function AssignEnemy(objChar) {
    switch (objChar) {
        case "obi":
            {
                Enemy = Obi;
                break;
            }
        case "luke":
            {
                Enemy = Luke;
                break;
            }
        case "sid":
            {
                Enemy = DarthSidious;
                break;
            }
        case "maul":
            {
                Enemy = DarthMaul;
                break;
            }

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
    fight = $("#fight");

};

function Attack() {
    hits++;
    baseAttack = User.AttackPower;
    Enemy.HP -= User.AttackPower;
    User.HP -= Enemy.AttackPower;
    User.AttackPower += baseAttack *  hits;
    if(Enemy.HP < 0) {
        Enemy.stage = 2;
        stage = 1;
        alert("enemy Dead!");
     
        $(defender).detach();
        InitClickHandler();
    }
}
