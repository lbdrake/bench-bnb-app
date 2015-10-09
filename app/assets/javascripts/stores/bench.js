(function(root) {
  'use strict';

  var _benches = [], CHANGE_EVENT = "change";

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function (){
      return _benches.slice();
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        BenchStore.emit(CHANGE_EVENT);
        _benches = payload.benches;
      }
    })

  }); // end of root.BenchStore
}(this)); // end of iife
