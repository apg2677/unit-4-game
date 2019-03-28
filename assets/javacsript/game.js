$(document).ready(function() {
    var char1 = $("#char1");
    var enemies = $("#enemies");
    var enemCol1 = $("#enemCol1");

    $(char1).on("click", function() {
        var tempChar = $("<div>");
        // tempChar.attr("class", "col-md-3");
        tempChar.append(char1);
        enemies.append(tempChar);
        // enemCol1.append(tempChar);
    });
});