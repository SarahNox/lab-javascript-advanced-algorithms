function QueueDataStructure (queue) {
  this.queueControl = [];
  this.MAX_SIZE = 100;
}

QueueDataStructure.prototype.isEmpty = function() {
    if (this.queueControl.length === 0){
       return true;
    }
    else return false;
  };


  QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE){
      return true;
    }
    if(this.queueControl.length === this.MAX_SIZE){
      return false;
    }

};

  QueueDataStructure.prototype.enqueue = function (value) {
    if (this.queueControl.length === this.MAX_SIZE)
    return 'Queue Overflow';
    this.queueControl.unshift(value);
       return this.queueControl;
    };

  QueueDataStructure.prototype.dequeue = function () {
    if (this.queueControl.length === 0){
    return 'Queue Underflow';
    }
return this.queueControl.pop();
};
