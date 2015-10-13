(function(root) {
  'use strict';

  var _params = {min: "", max: "", bounds: ""}, FILTER_CHANGE_EVENT = "FILTER_CHANGE_EVENT";

  root.FilterStore = $.extend({}, EventEmitter.prototype, {

  all: function (){
    return _params.slice();
  },

  addFilterChangeListener: function(callback) {
    this.on(FILTER_CHANGE_EVENT, callback);
  },

  removeFilterChangeListener: function(callback) {
    this.removeListener(FILTER_CHANGE_EVENT, callback);
  },

  updateMinSeats: function(data){
    _params.min = data;
  },

  updateMaxSeats: function(data){
    _params.max = data;
  },

  updateBounds: function(data){
    _params.bounds = data;
  },

  dispatcherID: AppDispatcher.register(function(payload) {
    if (payload.actionType === FilterConstants.BENCH_BOUNDS_UPDATED) {
      this.updateBounds(payload.bounds);
      FilterStore.emit(FILTER_CHANGE_EVENT);
    } else if (payload.actionType === FilterConstants.BENCH_SEATING_MIN_UPDATED) {
      this.updateMinSeats(payload.min);
      FilterStore.emit(FILTER_CHANGE_EVENT);
    } else if (payload.actionType === FilterConstants.BENCH_SEATING_MAX_UPDATED) {
      this.updateMaxSeats(payload.max);
      FilterStore.emit(FILTER_CHANGE_EVENT);
    }
  }),

  // register callback with the filter_Actions

}); // end of FilterStore

}(this)); // end of iife
