(function(root) {
  'use strict';

  var _benches = [], CHANGE_EVENT = "change";

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function (){
      return _benches.slice(0);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        _benches = payload.benches;
        BenchStore.emit(CHANGE_EVENT);
      }
    })

  }); // end of root.BenchStore
}(this)); // end of iife
