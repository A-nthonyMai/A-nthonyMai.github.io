// JavaScript file containing functions relating to the console
// Created by Anthony Mai

// Hides console when leaving console
$("#consoleCommand").blur(function() {
  hideConsole();
});

// Determines whether the user has entered a command
$("#consoleCommand").keydown(function(event) {
  var command = $("#consoleCommand").val().toUpperCase();
  var key = event.which;
  if (key == 13) {
    if (command == "HELP") {
      var commandList = getListOfCommands();
      $("#consoleCommands").append("<br/>" + "Commands: ");
      for(var i = 0; i < commandList.length; i++) {
        $("#consoleCommands").append("<br/>" + commandList[i]);
      }
    }
    else if (command == "CLEAR") {
      clearConsole();
    }
    else {
      $("#consoleCommands").append("<br/>" + command);
    }

    $("#consoleCommands").scrollTop($("#consoleCommands").get(0).scrollHeight);
    $("#consoleCommand").val("");
  }
});


// Hides console
function hideConsole() {
  $("#console").addClass("scale-out");
  $("#console").removeClass("scale-in");
  $("#showConsoleButton").show();
}

// Shows console
function showConsole() {
  $("#showConsoleButton").hide();
  $("#console").removeClass("scale-out")
  $("#console").addClass("scale-in");
  $("#console").show();
  $("#consoleCommand").focus();
}

$("#showConsoleButton").click(function () {
  showConsole();
});

function getListOfCommands() {
  commands = ["HELP", "HOME", "RESUME", "CONTACT", "CLEAR"];
  return commands;
}

function clearConsole() {
  $("#consoleCommands").empty();
  $("#consoleCommands").append("Enter a command below or type HELP for a list of commands");
}