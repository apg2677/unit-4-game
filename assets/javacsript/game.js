$(document).ready(function () {

    InitVariables();

    InitCharHandler(HideRow, DisplayRow);

    InitEnemyHandler();


    function DisplayRow(row, x) {
        for (var i = 1; i < 5; i++) {
            if (i == x) {
                continue;
            }
            var strTempE = row;
            strTempE += i;
            $(strTempE).show();
        }
    };


    function HideRow(row, x) {
        for (var i = 1; i < 5; i++) {
            if (i == x) {
                continue;
            }
            var strTempE = row;
            strTempE += i;
            $(strTempE).css("display", "none");
        }
    };

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
function InitCharHandler(HideRow, DisplayRow) {
    $("#charCol1").on("click", function () {
        HideRow("#charCol", 1);
        DisplayRow("#enemyCol", 1);
    });
    $("#charCol2").on("click", function () {
        HideRow("#charCol", 2);
        DisplayRow("#enemyCol", 2);
    });
    $("#charCol3").on("click", function () {
        HideRow("#charCol", 3);
        DisplayRow("#enemyCol", 3);
    });
    $("#charCol4").on("click", function () {
        HideRow("#charCol", 4);
        DisplayRow("#enemyCol", 4);
    });
}
function InitEnemyHandler() {
    $("#enemyCol1").on("click", function () {
       $(this).appendTo("#defender");
    });
    $("#enemyCol2").on("click", function () {
       
    });
    $("#enemyCol3").on("click", function () {
     
    });
    $("#enemyCol4").on("click", function () {
    
    });
}
