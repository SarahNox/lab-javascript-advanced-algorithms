var myQueue = new QueueDataStructure();

var addToTheQueue = function() {
  myQueue.enqueue($("#queueID .inputBox").attr("value"));
  queueFiller();
};

var removeFromTheQueue = function () {
  myQueue.dequeue();
  queueEmptier();
};

  var queueCounter = 0;

var queueFiller = function () {
  var currentStep = $(".queueStep")[queueCounter];
  $(currentStep).toggleClass("filledBox");
  queueCounter += 1;
};

var queueEmptier = function () {
  queueCounter -= 1;
  var currentStep = $(".queueStep")[queueCounter];
  $(currentStep).toggleClass("filledBox");

};

function queueTrigger () {
  $("#queueID").append("<div class='topBox'></div>");
  $("#queueID").append("<div class='bottomBox'></div>");
  $("#queueID .topBox").append("<div class='titles'>Queue</div>");
  $("#queueID .topBox").append("<input class='inputBox' type='text' placeholder='Add element to the queue'>");
  $("#queueID .topBox").append("<div class='addRemButtons'></div>");
  $("#queueID .addRemButtons").append("<button class='addButton' onclick='addToTheQueue()'>ADD</button>");
  $("#queueID .addRemButtons").append("<button class='remButton' onclick='removeFromTheQueue()'>TAKE</button>");
  for(var i=0;i<10;i++){
      $('#queueID .bottomBox').append('<div class="queueStep" />');
  }
}

$(document).ready(function(){
  queueTrigger();
});
