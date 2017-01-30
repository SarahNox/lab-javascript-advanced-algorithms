var myStack = new StackDataStructure();
var addToTheStack = function () {
  myStack.push($("#stackID .inputBox").value);
  stackFiller();
};

var removeFromTheStack = function () {
  myStack.pop();
  stackEmptier();
};

  var stackCounter = 9;

var stackFiller = function () {
  var currentStep = $(".stackStep")[stackCounter];
  $(currentStep).toggleClass("filledBox");
  var currentText = $("#stackID .inputBox").value;
  $(currentStep).html(currentText);
  stackCounter -= 1;
};

var stackEmptier = function () {
  stackCounter += 1;
  var currentStep = $(".stackStep")[stackCounter];
  $(currentStep).toggleClass("filledBox");

};

function stackTrigger () {
  $("#stackID").append("<div class='topBox'></div>");
  $("#stackID").append("<div class='bottomBox'></div>");
  $("#stackID .topBox").append("<div class='titles'>Stack</div>");
  $("#stackID .topBox").append("<input class='inputBox' type='text' placeholder='Add elements to the Stack'>");
  $("#stackID .topBox").append("<div class='addRemButtons'></div>");
  $("#stackID .addRemButtons").append("<button class='addButton' onclick='addToTheStack()'>ADD</button>");
  $("#stackID .addRemButtons").append("<button class='remButton' onclick='removeFromTheStack()'>TAKE</button>");
  for(var i=0;i<10;i++){
      $('#stackID .bottomBox').append('<div class="stackStep" />');
  }

}

$(document).ready(function(){
  stackTrigger();


});
