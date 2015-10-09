(function(root) {
  'use strict';

  var _benches = [];
  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function (){
      return _benches.slice();
    },



  }); // end of root.BenchStore
}(this)); // end of iife
